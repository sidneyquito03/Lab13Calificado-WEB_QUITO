package com.tecsup.prj_service_spring_boot_react.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "productos")
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "descripcion")
    private String descripcion;
    @Column(name = "precio")
    private Double precio;

    @Column(name = "cantidad_stock")
    private int cantidadStock;

    @Column(name = "categoria")
    private String categoria;

    @Column(name = "fecha_creacion")
    private java.sql.Timestamp fechaCreacion;

    @Column(name = "estado")
    private String estado;
}

