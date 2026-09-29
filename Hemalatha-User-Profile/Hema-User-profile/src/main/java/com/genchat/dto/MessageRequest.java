package com.genchat.dto;
import jakarta.validation.constraints.NotBlank;
public record MessageRequest(@NotBlank String content) {}
