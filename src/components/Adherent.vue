<template>
  <div class="ui container">
    <!-- form add new post -->
    <h1 class="ui header">Adherents</h1>
    <button class="ui positive basic button" v-on:click="addB = !addB">
      Add Adherent
    </button>
    <div v-if="addB">
      <form class="ui form">
        <sui-form-field>
          <label>Nom :</label>
          <input
            type="text"
            placeholder="Titre de l'oeuvre"
            v-model="oeuvre.titre"
          />
        </sui-form-field>
        <sui-form-field>
          <label>Prenom :</label>
          <input
            type="text"
            placeholder="Titre Auteur"
            v-model="oeuvre.auteur"
          />
        </sui-form-field>
        <sui-form-field>
          <label>Email :</label>
          <input type="text" placeholder="editeur" v-model="oeuvre.editeur" />
        </sui-form-field>
        <sui-form-field>
          <label>CIN :</label>
          <input
            type="text"
            placeholder="année de sortie"
            v-model="oeuvre.anneeDeSortie"
          />
        </sui-form-field>
        <button class="ui primary button" @click="createOeuvre">Submit</button>
      </form>
    </div>
    <!-- title -->
    <h2 class="ui horizontal divider header">
      <i class="file icon" />
      Liste des oeuvres :
    </h2>

    <!-- list of posts -->
    <div class="ui three column relaxed grid">
      <div class="column" v-for="post in posts" :key="post._id">
        <!-- card -->
        <div class="ui fluid card">
          <div class="content">
            <p class="header">{{ post.nom }}</p>
            <div class="meta">
              <span class="date">{{ post.prenom }}</span>
            </div>
            <div class="description">
              {{ post.email }}
            </div>
            <div class="description">
              <!-- {{ post.professeur.nom }} -->
            </div>
          </div>
          <div class="extra content">
            <button
              class="ui left floated red button"
              @click="deleteOeuvre(post.id)"
            >
              Delete
            </button>
            <button class="ui right floated blue button" @click="toggle(post)">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>

    <sui-modal v-model="open">
      <sui-modal-content>
        <sui-form>
          <sui-form-field>
            <label> {{ oeuvre.titre }} </label>
          </sui-form-field>
          <sui-form-field>
            <label>Nom :</label>
            <input type="text" placeholder="nom" v-model="current_post.nom" />
          </sui-form-field>
          <sui-form-field>
            <label>Auteur :</label>
            <input
              type="text"
              placeholder="auteur"
              v-model="current_post.auteur"
            />
          </sui-form-field>
        </sui-form>
      </sui-modal-content>
      <sui-modal-actions>
        <sui-button type="submit" @click="updateOeuvre">Update</sui-button>
      </sui-modal-actions>
    </sui-modal>
  </div>
</template>

<script>
import axios from "axios";
import Oeuvre from "../models/Adherent";
const url = "http://localhost:9090";
export default {
  data() {
    return {
      oeuvre: Oeuvre,
      open: false,
      addB: false,
      posts: [],
      current_post: {},
      err: "",
      id: "",
    };
  },
  methods: {
    toggle(post) {
      this.current_post = JSON.parse(JSON.stringify(post));
      this.open = !this.open;
    },
    createOeuvre() {
      axios
        .post(url + "/ajouterAdherent", {
          id: this.oeuvre.id,
          titre: this.oeuvre.titre,
          auteur: this.oeuvre.auteur,
          editeur: this.oeuvre.editeur,
          anneDeSortie: this.oeuvre.anneDeSortie,
        })
        .then(() => {
          this.getOeuvre();
        });
    },
    deleteOeuvre(id) {
      console.log(id);
      axios.post(url + "/deleteAdherent", { id: id }).then(() => {
        this.getOeuvre();
      });
    },
    getOeuvre() {
      axios.get(url + "/oeuvres").then((res) => {
        this.posts = res.data;
      });
    },
    updateOeuvre() {
      // eslint-disable-next-line no-console
      console.log(url + "/updateAdherent", this.current_post);
      axios.post(url + "/updateAdheren", this.current_post).then(() => {
        this.toggle({});
        this.getOeuvre();
      });
    },
  },
  mounted() {
    this.getOeuvre();
  },
};
</script>

<style>
form {
  margin: 50px 25px 25px;
}
.ui.horizontal.divider.header {
  margin: 50px 50px 30px;
}
</style>
