package main

import "github.com/gofiber/fiber/v2"

func main() {
	app := fiber.New()

	app.Static("/", "index.html")
	app.Static("/misc", "./misc")

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("420")
	})

	app.Listen(":6969")
}
