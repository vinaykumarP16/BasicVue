const app=Vue.createApp({
 
  data(){
    return {
      firstName:'Vinay',
      lastname:'Kumar P',
      email:'vinaykumarp1995v@gmail.com',
      gender:'male',
      photo:'https://randomuser.me/api/portraits/men/87.jpg',
    }
  },
  methods:{
    async getuser(){
      const res = await fetch('https://randomuser.me/api/')
      const { results } = await res.json()
      console.log(results);
      this.firstName=results[0].name.first
      this.lastname=results[0].name.last
      this.email=results[0].email
      this.gender=results[0].gender
      this.photo=results[0].picture.large
    
    },
  },
})

app.mount('#app');


