package com.kob.backend.controller.pk;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("pk/")
public class BotinfoController {
    @RequestMapping("info/")
    public Map<String, String> index() {
        Map<String, String> bot = new HashMap<>();
        bot.put("name", "tiger");
        bot.put("rating", "1500");
        return bot;
    }
}
