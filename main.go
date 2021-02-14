package main

import (
	_ "encoding/json"
	"fmt"
	"time"

	"github.com/Equanox/gotron"
)

type CustomEvent struct {
	*gotron.Event
	Content string `json:content`
}

// EventSenderHelloWorld
func EventSenderHelloWorld(window *gotron.BrowserWindow) {
	for {
		time.Sleep(time.Second * 1)
		window.Send(&CustomEvent{
			Event:   &gotron.Event{Event: "HELLO_WORLD"},
			Content: "Hello Gotron World !!!!",
		})
		fmt.Println("ddd")
	}
}

func main() {
	// Create a new browser window instance
	window, err := gotron.New("ui/dist")
	if err != nil {
		panic(err)
	}

	// Alter default window size and window title.
	window.WindowOptions.Width = 1200
	window.WindowOptions.Height = 980
	window.WindowOptions.Title = "Gotron boilerplate"

	// Start the browser window.
	// This will establish a golang <=> nodejs bridge using websockets,
	// to control ElectronBrowserWindow with our window object.
	done, err := window.Start()
	if err != nil {
		panic(err)
	}

	// Open dev tools must be used after window.Start
	window.OpenDevTools()
	go EventSenderHelloWorld(window)

	// Wait for the application to close
	<-done
}
