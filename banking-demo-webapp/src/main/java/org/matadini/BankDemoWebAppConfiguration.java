package org.matadini;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
class BankDemoWebAppConfiguration {
    @Bean
    RestTemplate restTemplate() {
        return new RestTemplate();
    }
}
