import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'




new Vue({
    el: '#app',
    data() {
      return {
        loading: false,
        form: {
          name: '',
          value: ''
        },
        habbits: []
      }
    },
    computed: {
      canCreate() {
        return this.form.value.trim() && this.form.name.trim()
      }
    },
    methods: {
      async createHabbit() {
        const {...habbit} = this.form
  
        const newHabbit = await request('/api/habbits', 'POST', habbit)
  
        this.habbits.push(newHabbit)
  
        this.form.name = this.form.value = ''
      },
      async markHabbit(id) {
        const Habbit = this.habbits.find(c => c.id === id)
        const updated = await request(`/api/habbits/${id}`, 'PUT', {
          ...Habbit,
          marked: true
        })
        Habbit.marked = updated.marked
      },
      async removeHabbit(id) {
        await request(`/api/habbits/${id}`, 'DELETE')
        this.habbits = this.habbits.filter(c => c.id !== id)
      }
    },
    async mounted() {
      this.loading = true
      this.habbits = await request('/api/habbits')
      this.loading = false
    }
  })
  
  async function request(url, method = 'GET', data = null) {
    try {
      const headers = {}
      let body
  
      if (data) {
        headers['Content-Type'] = 'application/json'
        body = JSON.stringify(data)
      }
  
      const response = await fetch(url, {
        method,
        headers,
        body
      })
      return await response.json()
    } catch (e) {
      console.warn('Error:', e.message)
    }
  }