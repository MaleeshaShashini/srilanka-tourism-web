package com.srilankatourism.backend.controller;

import com.srilankatourism.backend.model.Destination;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173") // Frontend එකට අවසර දීම (React සම්බන්ධ කරනකොට මේක ඕන වෙනවා)
public class DestinationController {

    @GetMapping("/destinations")
    public List<Destination> getDestinations() {
        List<Destination> destinations = new ArrayList<>();

        // 1. Sigiriya
        destinations.add(new Destination(
                1,
                "Sigiriya Lion Rock",
                "Matale",
                "Ancient rock fortress and palace built by King Kashyapa.",
                "https://upload.wikimedia.org/wikipedia/commons/4/4c/Sigiriya_Rock.jpg"
        ));

        // 2. Ella
        destinations.add(new Destination(
                2,
                "Ella Nine Arch Bridge",
                "Badulla",
                "A colonial-era railway bridge famous for its scenic beauty.",
                "https://upload.wikimedia.org/wikipedia/commons/a/bb/Nine_Arch_Bridge_Ella.jpg"
        ));

        // 3. Mirissa
        destinations.add(new Destination(
                3,
                "Mirissa Beach",
                "Matara",
                "Famous for whale watching and surfing.",
                "https://upload.wikimedia.org/wikipedia/commons/f/f4/Mirissa_Beach.jpg"
        ));

        return destinations;
    }
}