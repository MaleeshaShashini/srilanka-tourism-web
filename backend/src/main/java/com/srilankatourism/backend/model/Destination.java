package com.srilankatourism.backend.model;

public class Destination {
    private int id;
    private String name;
    private String location;
    private String description;
    private String imageUrl;

    // Constructor
    public Destination(int id, String name, String location, String description, String imageUrl) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.description = description;
        this.imageUrl = imageUrl;
    }

    // Getters
    public int getId() { return id; }
    public String getName() { return name; }
    public String getLocation() { return location; }
    public String getDescription() { return description; }
    public String getImageUrl() { return imageUrl; }
}
