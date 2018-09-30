; (function () {
    var list = [];
    var Todo = (function () {
        var id = 1;
        return function (title, desc) {
            this.id = id++;
            this.title = title;
            this.desc = desc;
        }
    })();

    var SearchBar = {
        template: `
        <div class="row toolbar">
            <div class="col-md-8">
                keyword：
                <input type="text" v-model="keyword" />
                <input type="button" @click="search()" value="search" class="btn btn-primary"  />
            </div>
        </div>
    `,
        data: function () {
            return {
                keyword: ''
            }
        },
        methods: {
            search: function () {
                this.$store.commit('search', {
                    title: this.keyword
                })
            }
        }

    };

    var TodoItem = {
        template: `
     <tr>
        <th>{{todo.id}}</th>
        <td>{{todo.title}}</td>
        <td>{{todo.desc}}</td>
        <td>
            <input type="button" value="remove" @click="remove()" class="btn btn-danger" />
            <input type="button" value="edit" @click="edit()" class="btn btn-info" />
        </td>
    </tr>
    `,
        props: ['todo'],
        methods: {
            edit: function () {
                this.$store.commit('edit', {id: this.todo.id});
            },
            remove: function () {
                this.$store.commit('remove', {id: this.todo.id});
            }
        }
    };

    var TodoList = {
        template: `
        <div class="col-md-6">
            <table class="table table-bordered">
                <tr>
                    <th></th>
                    <th>title</th>
                    <th>desc</th>
                    <th></th>
                </tr>
                <todo-item  v-for="item in items" :todo="item" :key="item.id"></todo-item>
            </table>
        </div>
    `,
        props: ['items'],
        components: {
            'todo-item': TodoItem
        },
    };

    var TodoForm = {
        template: `
     <div class="col-md-6">
        <div class="form-inline">
            <label for="title" class="control-label col-md-4">title:</label>
            <input type="hidden" v-bind:value="todo.id" />
            <input type="text" v-model="todo.title" class="form-control col-md-8">
        </div>
        <div class="form-inline">
            <label for="desc" class="control-label col-md-4">desc</label>
            <input type="text" v-model="todo.desc" class="form-control col-md-8">
        </div>
        <div class="form-inline">
            <input type="button" value="OK" v-on:click="ok()" class="btn btn-primary offset-md-10"  />
        </div>
    </div>
    `,
        props: ['initItem'],

        computed: {
            todo: function () {
                return { id: this.initItem.id, title: this.initItem.title, desc: this.initItem.desc };
            }
        },

        methods: {
            ok: function () {
                this.$store.commit('save', this.todo);
            }
        }

    };


    var TodoContainer = {
        template: `
        <div class="container">
            <search-bar></search-bar>
            <div class="row">
                <todo-list :items="items"></todo-list>            
                <todo-form :init-item="initItem"></todo-form>
            </div>
        </div>
        `,
        components: {
            'search-bar': SearchBar,
            'todo-list': TodoList,
            'todo-form': TodoForm
        },
        computed: {
            initItem: function () {
                return this.$store.state.initItem;
            },
            items: function() {
                return this.$store.state.items;
            }
        }
    };


    var store = new Vuex.Store({
        state: {
            items: [],
            initItem: {
                title: '',
                desc: '',
                id: ''
            }
        },
        mutations: {
            search: function (state, payload) {
                state.items = list.filter(v => (v.title.indexOf(payload.title) !== -1))
            },
            save: function (state, payload) {
                if (state.initItem.id) {
                    // 界面数据
                    state.items = state.items.map(v => {
                        if (v.id === payload.id) {
                            return payload;
                        }
                        return v;
                    });

                    // 内存数据
                    var o = list.filter(v => v.id === state.initItem.id)[0];
                    o.title = payload.title;
                    o.desc = payload.desc;
                } else {
                    var item = new Todo(payload.title, payload.desc);
                    state.items.push(item);
                    list.push(item)
                }

                state.initItem = {
                    id: '',
                    title: '',
                    desc: ''
                }
            },
            remove: function (state, payload) {
                state.items = state.items.filter(v => v.id !== payload.id);
                list = list.filter(v => v.id !== payload.id);
            },
            edit: function (state, payload) {
                state.initItem = state.items.filter(v => v.id === payload.id)[0];
            }
        }
    });

    var app = new Vue({
        el: '#app',
        store: store,
        components: {
            'todo-container': TodoContainer
        }
    });

})();

/**
 *
 *
 * <div id="app">
 *     <todo-container></todo-container>
 * </app>
 */
