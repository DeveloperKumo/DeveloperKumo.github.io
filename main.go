package main

import "github.com/gofiber/fiber/v2"

func main() {
	app := fiber.New()

	app.Static("/", "index.html")
	app.Static("/", "./pages")
	app.Static("/misc", "./misc")

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("error")
	})

	app.Get("/contact", func(c *fiber.Ctx) error {

		return c.SendString("contact.html")
	})

	app.Listen(":6969")
}
