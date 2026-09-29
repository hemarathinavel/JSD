package com.genchat.config;
import com.genchat.repository.UserRepository; import org.springframework.context.annotation.*; import org.springframework.security.config.annotation.web.builders.HttpSecurity; import org.springframework.security.core.userdetails.*; import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder; import org.springframework.security.crypto.password.PasswordEncoder; import org.springframework.security.web.SecurityFilterChain;
@Configuration public class SecurityConfig {
 @Bean PasswordEncoder passwordEncoder(){return new BCryptPasswordEncoder();}
 @Bean UserDetailsService userDetailsService(UserRepository repo){return username -> repo.findByUsername(username).map(u->User.withUsername(u.getUsername()).password(u.getPassword()).roles("USER").build()).orElseThrow(()->new UsernameNotFoundException("User not found"));}
 @Bean SecurityFilterChain filterChain(HttpSecurity http) throws Exception {return http.csrf(csrf->csrf.disable()).authorizeHttpRequests(a->a.requestMatchers("/","/index.html","/api/users/register","/css/**","/js/**").permitAll().anyRequest().authenticated()).httpBasic(b->{}).build();}
}
