package main

import (
	"context"
	"fmt"
	"os"

	"github.com/edaniels/golog"
	speech "github.com/viam-labs/speech-service-api/src/speech_service_api_go"
	"go.viam.com/rdk/robot/client"
	"go.viam.com/utils/rpc"
)

func main() {
	logger := golog.NewDevelopmentLogger("client")
	robot, err := client.New(
		context.Background(),
		os.Getenv("ROBOT_ADDRESS"),
		logger,
		client.WithDialOptions(
			rpc.WithEntityCredentials(
				os.Getenv("API_KEY_ID"),
				rpc.Credentials{
					Type:    rpc.CredentialsTypeAPIKey,
					Payload: os.Getenv("API_KEY"),
				})),
	)
	if err != nil {
		logger.Fatal(err)
	}

	defer robot.Close(context.Background())
	logger.Info("Resources:")
	logger.Info(robot.ResourceNames())

	sp, err := speech.FromRobot(robot, "speechio")
	fmt.Println("err", err)
	sp.Say(context.Background(), "Hello there, how is your day going?", true)
}
