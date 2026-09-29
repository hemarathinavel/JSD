package com.genchat.dto;
import jakarta.validation.constraints.NotBlank;
public record RegisterRequest(@NotBlank String username,@NotBlank String password) {}
