import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const state = () => ({
  authUser: null,
  token: null,
  img: null,
  paquetes: [],
  paquetesComprados: [],
  tipo: false
})

export const getters = {
  getToken(state) {
    if (state.token) {
      return state.token;
    } else {
      return false;
    }
  }
}

export const mutations = {
  SET_USER(state, user) {
    state.authUser = user.email
    state.token = user.uid
    state.img = user.imagen
    state.paquetes = user.paquetes
    state.paquetesComprados = user.paquetesComprados
    state.tipo = user.tipo
  },
}

export const actions = {
  async signUp({ commit }, { email, password }) {
    try {
      await this.$fireAuth.createUserWithEmailAndPassword(
        email,
        password
      ).then(async user => {
        let userStore = {};
        userStore.email = user.user.email;
        userStore.uid = user.user.uid;
        await this.$fireStore
          .collection("usuarios")
          .where("usuario", "==", userStore.uid).get().then((doc) => {
            doc.forEach((result) => {
              userStore.imagen = result.data().imagen;
              userStore.paquetes = result.data().paquetes;
              userStore.paquetesComprados = result.data().paquetesComprados;
              userStore.tipo = result.data().tipo;
            })
          });
        commit('SET_USER', user)
      })
    } catch (error) {
      console.log(error);
    }
  },
  async logIn({ commit }, { email, password }) {
    try {
      await this.$fireAuth.signInWithEmailAndPassword(
        email,
        password
      ).then(async user => {
        let userStore = {};
        userStore.email = user.user.email;
        userStore.uid = user.user.uid;
        await this.$fireStore
          .collection("usuarios")
          .where("usuario", "==", userStore.uid).get().then((doc) => {
            doc.forEach((result) => {
              userStore.imagen = result.data().imagen;
              userStore.paquetes = result.data().paquetes;
              userStore.paquetesComprados = result.data().paquetesComprados;
              userStore.tipo = result.data().tipo;
            })
          });
        commit('SET_USER', userStore)
      })
    } catch (error) {
      console.log(error);
    }
  },
  async getUsuarios() {
    let usuarios;
    try {
      await this.$fireStore
        .collection("usuarios")
        .get()
        .then((querySnapshot) => {
          const usuariosReferencia = [];
          querySnapshot.forEach((doc) => {
            if (!doc.data().tipo) {
              let usuarioReferencia = {};
              usuariosReferencia.id = doc.id;
              usuariosReferencia.nombre = doc.data().nombre;
              usuariosReferencia.imagen = doc.data().imagen;
              usuariosReferencia.paquetes = doc.data().paquetes;
              usuariosReferencia.paquetesComprados = doc.data().paquetesComprados;
              usuariosReferencia.push(usuarioReferencia);
            }
          });
          usuarios = usuariosReferencia;
        });
      return usuarios;
    } catch (error) {
      console.log(error)
    }
  },
  async getCategorias() {
    let categorias;
    try {
      await this.$fireStore
        .collection("categorias")
        .get()
        .then((querySnapshot) => {
          const categoriasReferencia = [];
          querySnapshot.forEach((doc) => {
            let categoriaReferencia = {};
            categoriaReferencia.id = doc.id;
            categoriaReferencia.imagen = doc.data().imagen;
            categoriaReferencia.nombre = doc.data().nombre;
            categoriasReferencia.push(categoriaReferencia);
          });
          categorias = categoriasReferencia;
        });
      return categorias;
    } catch (error) {
      console.log(error)
    }
  },
  async getPaquetes() {
    let paquetes;
    try {
      await this.$fireStore
        .collection("paquetes")
        .get()
        .then((querySnapshot) => {
          const paquetesReferencia = [];
          querySnapshot.forEach((doc) => {
            let paqueteReferencia = {};
            paqueteReferencia.id = doc.id;
            paqueteReferencia.imagen = doc.data().imagen;
            paqueteReferencia.precio = doc.data().precio;
            paqueteReferencia.titulo = doc.data().titulo;
            paqueteReferencia.resumen = doc.data().resumen;
            paqueteReferencia.usuario = doc.data().usuario;
            paquetesReferencia.push(paqueteReferencia);
          });
          paquetes = paquetesReferencia;
        });
      return paquetes;
    } catch (error) {
      console.log(error)
    }
  },
  async getPaquete({ commit }, { id }) {
    let paquete = {};
    try {
      var paqueteData = await this.$fireStore
        .collection("paquetes")
        .doc(id);
      await paqueteData.get().then((doc) => {
        paquete.titulo = doc.data().titulo;
        paquete.resumen = doc.data().resumen;
        paquete.previsualizacion = doc.data().previsualizacion;
        paquete.precio = doc.data().precio;
        paquete.usuario = doc.data().usuario;
        let comentarios = [];
        doc.data().comentarios.forEach(async (comentarioRef) => {
          var comentarioData = await this.$fireStore
            .collection("comentarios")
            .doc(comentarioRef);
          await comentarioData.get().then((subDoc) => {
            let com = {};
            com.comentario = subDoc.data().comentario;
            com.usuario = subDoc.data().usuario;
            comentarios.push(com);
          });
        });
        paquete.comentarios = comentarios;
      });
      return paquete
    } catch (error) {
      console.log(error)
    }
  },
  async getArticulos() {
    let articulos;
    try {
      await this.$fireStore
        .collection("articulos")
        .get()
        .then((querySnapshot) => {
          const articulosReferencia = [];
          querySnapshot.forEach((doc) => {
            let articuloReferencia = {};
            articuloReferencia.id = doc.id;
            articuloReferencia.contenido = doc.data().contenido;
            articuloReferencia.duracion = doc.data().duracion;
            articuloReferencia.titulo = doc.data().titulo;
            articuloReferencia.usuario = doc.data().usuario;
            articulosReferencia.push(articuloReferencia);
          });
          articulos = articulosReferencia;
        });
      return articulos;
    } catch (error) {
      console.log(error)
    }
  },
  async getArticulo({ commit }, { id }) {
    let articulo = {};
    try {
      var articuloData = await this.$fireStore
        .collection("articulos")
        .doc(id);
      await articuloData.get().then((doc) => {
        articulo.id = doc.id;
        articulo.titulo = doc.data().titulo;
        articulo.contenido = doc.data().contenido;
        articulo.duracion = doc.data().duracion;
        articulo.usuario = doc.data().usuario;
      });
      return articulo
    } catch (error) {
      console.log(error)
    }
  },
  async getMisPaquetes({ state }) {
    try {
      let paquetes = [];
      await this.$fireStore
        .collection("paquetes").where("usuario", "==", state.token)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            let paquete = {};
            paquete.titulo = doc.data().titulo;
            paquete.resumen = doc.data().resumen;
            paquete.previsualizacion = doc.data().previsualizacion;
            paquete.precio = doc.data().precio;
            paquete.usuario = doc.data().usuario;
            paquete.videos = doc.data().videos;
            paquete.comentarios = doc.data().comentarios;
            paquete.categoria = doc.data().categoria;
            paquete.aprobado = doc.data().aprobado;
            paquete.imagen = doc.data().imagen;
            paquete.publicacion = doc.data().publicacion;
            paquete.publicado = doc.data().publicado;
            paquetes.push(paquete);
          });
        });
      return paquetes;
    } catch (error) {
      console.log(error)
    }
  },
  async getMisVideos({ state }) {
    try {
      let videos = [];
      await this.$fireStore
        .collection("videos").where("usuario", "==", state.token)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            let video = {};
            video.id = doc.id;
            video.titulo = doc.data().titulo;
            videos.push(video);
          });
        });
      return videos;
    } catch (error) {
      console.log(error)
    }
  },
  async getMisArticulos() {
    let articulos;
    try {
      await this.$fireStore
        .collection("articulos")
        .get()
        .then((querySnapshot) => {
          const articulosReferencia = [];
          querySnapshot.forEach((doc) => {
            let articuloReferencia = {};
            articuloReferencia.id = doc.id;
            articuloReferencia.contenido = doc.data().contenido;
            articuloReferencia.duracion = doc.data().duracion;
            articuloReferencia.titulo = doc.data().titulo;
            articuloReferencia.usuario = doc.data().usuario;
            articulosReferencia.push(articuloReferencia);
          });
          articulos = articulosReferencia;
        });
      return articulos;
    } catch (error) {
      console.log(error)
    }
  },
  async uploadFiles({ state, commit }, { file }) {
    try {
      var storageRef = this.$fireStorage.ref();
      var fileRef = storageRef.child('videos/' + state.token + "/" + file[0].name);
      fileRef.put(file[0]).then((snapshot) => {
        console.log("uploaded")
      })
    } catch (error) {
      console.log(error)
    }
  },
  async getFiles({ state, commit }) {
    let files = [];
    try {
      var storageRef = this.$fireStorage.ref();
      var fileRef = storageRef.child('videos/' + state.token);
      fileRef.listAll().then((res) => {
        res.items.forEach((file) => {
          let tempFile = {};
          tempFile.name = file.location.path_;
          file.getDownloadURL().then((url) => {
            tempFile.url = url
          })
          files.push(tempFile)
        })
      })
    } catch (error) {
      console.log(error)
    }
    return files;
  },
  async getVideo({ commit }, { id }) {
    let video = {};
    try {
      var videoData = await this.$fireStore
        .collection("videos")
        .doc(id);
      await videoData.get().then((doc) => {
        console.log(doc.data())
        video.titulo = doc.data().titulo;
        video.video = doc.data().video;
        video.descripcion = doc.data().descripcion;
        video.duracion = doc.data().duracion;
      });
      return video;
    } catch (error) {
      console.log(error)
    }
  },
  async postVideo({ state, commit }, { video }) {
    try {
      await this.$fireStore
        .collection("videos")
        .add({
          titulo: video.titulo,
          usuario: state.token,
          video: video.video,
          descripcion: video.descripcion,
          paquete: "",
          duracion: video.duracion
        });
    } catch (error) {
      console.log(error)
    }
  },
  async postPaquete({ state, commit }, { paquete }) {
    try {
      await this.$fireStore
        .collection("paquetes")
        .add({
          aprobado: "",
          categoria: paquete.categoria,
          comentarios: [],
          imagen: "",
          precio: paquete.precio,
          previsualizacion: paquete.previsualizacion,
          publicacion: "",
          publicado: false,
          resumen: paquete.resumen,
          titulo: paquete.titulo,
          videos: paquete.videos,
          usuario: state.token
        });
    } catch (error) {
      console.log(error)
    }
  }
}
