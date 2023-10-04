package br.com.terabyte.controle;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import br.com.terabyte.dao.TerabyteDao;
import br.com.terabyte.modelo.TerabyteModelo;

@RestController
@CrossOrigin("*")
public class TerabyteControle {
    @Autowired
    TerabyteDao dao;

    @GetMapping
    public Iterable<TerabyteModelo> listar() {
        return dao.findAll();
    }
    public byte[] imagem(Integer id){
        Optional<TerabyteModelo> produto = dao.findById(id);
        return produto.orElse(null).getImg();
    }

    @PostMapping
    public ResponseEntity<TerabyteModelo> cadastrar(@RequestParam("img") MultipartFile img,
            @RequestParam("description") String description, @RequestParam("preco") Double preco,
            @RequestParam("tipo") Integer tipo) {
        try {
            byte[] imgBytes = img.getBytes();
            TerabyteModelo model = new TerabyteModelo();
            model.setDescription(description);
            model.setImg(imgBytes);
            model.setPreco(preco);
            model.setTipo(tipo);
            return new ResponseEntity<TerabyteModelo>(dao.save(model), HttpStatus.CREATED);
        } catch (Exception e) {
            return null;
        }
    }

    @PutMapping
    public ResponseEntity<TerabyteModelo> alterar( @RequestParam("id") Integer id, @RequestParam("img") MultipartFile img,
            @RequestParam("description") String description, @RequestParam("preco") Double preco,
            @RequestParam("tipo") Integer tipo) {
        try {
            byte[] imgBytes;
            TerabyteModelo model = new TerabyteModelo();
            if(img.isEmpty()){
                imgBytes = imagem(id);
            }else{
                imgBytes = img.getBytes();
            }
            model.setId(id);
            model.setDescription(description);
            model.setImg(imgBytes);
            model.setPreco(preco);
            model.setTipo(tipo);
            return new ResponseEntity<TerabyteModelo>(dao.save(model), HttpStatus.CREATED);
        } catch (Exception e) {
            return null;
        }
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable Integer id) {
        dao.deleteById(id);
    }
}
