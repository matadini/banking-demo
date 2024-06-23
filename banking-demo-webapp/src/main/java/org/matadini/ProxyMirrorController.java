package org.matadini;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.net.URI;

@RestController
@RequiredArgsConstructor
class ProxyMirrorController {

    private final RestTemplate restTemplate;
    private final TargetService targetService;

    @ResponseBody
    @RequestMapping("/api/v1/**")
    public String mirrorRest(@RequestBody(required = false) String body, HttpMethod method, HttpServletRequest request)
    {
        try {
            URI uri = new URI(
                    "http",
                    null,
                    targetService.getServer(),
                    targetService.getPort(),
                    request.getRequestURI(),
                    request.getQueryString(),
                    null);
            ResponseEntity<String> responseEntity =
                    restTemplate.exchange(uri, method, new HttpEntity<>(body), String.class);
            return responseEntity.getBody();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return null;
    }

}
