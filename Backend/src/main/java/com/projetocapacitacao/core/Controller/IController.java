package com.projetocapacitacao.core.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

public interface IController<T> {

    ResponseEntity<?> findAll();

    ResponseEntity<?> save(@Validated @RequestBody T object, Errors errors);

    ResponseEntity<?> update(@Validated @RequestBody T object, Errors errors);

    ResponseEntity<?> findOne(@PathVariable long id);

    ResponseEntity<?> deleteById(@PathVariable long id);
}
