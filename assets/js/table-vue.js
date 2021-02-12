const app = Vue.createApp({
  el: '#table-vue',
  data() {
    return {
      searchQuery: '',
      gridColumns: ['Nazwa', 'Opis', 'Cena'],
      gridData: [
        { Nazwa: '1. Item One', Opis: 'Ante turpis integer aliquet porttitor.', Cena: 19.99 },
        { Nazwa: '2. Item Two', Opis: 'Vis ac commodo adipiscing arcu aliquet.', Cena: 25.99 },
        { Nazwa: '3. Item Three', Opis: 'Morbi faucibus arcu accumsan lorem.', Cena: 59.99 },
        { Nazwa: '4. Item Four', Opis: 'Ante turpis integer aliquet porttitor.', Cena: 29.99 }
      ]
    }
  }
})

// register the grid component
app.component('table-vue-grid', {
  template: '#grid-template',
  props: {
    heroes: Array,
    columns: Array,
    filterKey: String
  },
  data: function() {
    return {
      sortKey: ''
    }
  },
  computed: {
    filteredHeroes: function() {
      const sortKey = this.sortKey
      const filterKey = this.filterKey && this.filterKey.toLowerCase()
      const order = this.sortOrders[sortKey] || 1
      let heroes = this.heroes
      if (filterKey) {
        heroes = heroes.filter(function(row) {
          return Object.keys(row).some(function(key) {
            return (
              String(row[key])
                .toLowerCase()
                .indexOf(filterKey) > -1
            )
          })
        })
      }
      if (sortKey) {
        heroes = heroes.slice().sort(function(a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return heroes
    },
    sortOrders() {
      const columnSortOrders = {}
      
      this.columns.forEach(function(key) {
        columnSortOrders[key] = 1
      })

      return columnSortOrders
    }
  },
  methods: {
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    },
    sortBy(key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  }
})

app.mount('#table-vue')
