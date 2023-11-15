package net.crazysoziety.backend.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import net.crazysoziety.backend.model.User;
import org.springframework.stereotype.Service;

import java.security.Key;

@Service
public class TokenServiceImpl implements TokenService {

    private final Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    @Override
    public String generateToken(User user) {
        return Jwts
                .builder()
                .setSubject(user.getUsername())
                .signWith(key)
                .compact();
    }

    @Override
    public String extractUsername(String token) {
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();

        return claims.getSubject();
    }


}
