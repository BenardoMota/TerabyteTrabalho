package br.com.terabyte.dao;

import org.springframework.data.repository.CrudRepository;

import br.com.terabyte.modelo.TerabyteModelo;

public interface TerabyteDao extends CrudRepository<TerabyteModelo, Integer>{
    
}
