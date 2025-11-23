package com.yogayataverma.wallpaper_website;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WallpaperWebsiteApplication {

	public static void main(String[] args) {
		SpringApplication.run(WallpaperWebsiteApplication.class, args);
		System.out.println("Server is running on port 8080");
	}

}
