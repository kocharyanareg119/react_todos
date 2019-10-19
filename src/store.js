import {Container} from 'unstated'

const defaultState = {
    list: [
        {
            id: 1,
            completed: false,
            text: 'Read README'
        },
        {
            id: 2,
            completed: false,
            text: 'Add one todo'
        },
        {
            id: 3,
            completed: false,
            text: 'Add filters'
        },
        {
            id: 4,
            completed: false,
            text: 'Add multiple lists'
        },
        {
            id: 5,
            completed: false,
            text: 'Optional: add tests'
        }
    ]

};

class TodosContainer extends Container {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.readStorage(), {isActive: 'All'});
        console.log(this.state);
    }

    readStorage() {
        if (window && window.localStorage) {
            const state = window.localStorage.getItem('appState');
            if (state) {
                return JSON.parse(state);
            }
        }

        return defaultState
    }

    syncStorage() {
        if (window && window.localStorage) {
            const state = JSON.stringify(this.state);
            window.localStorage.setItem('appState', state);
        }
    }

    getList() {
        return this.state.list
    }

    toggleComplete = async id => {
        const item = this.state.list.find(i => i.id === id) || {};
        const completed = !item.completed;

        // We're using await on setState here because this comes from unstated package, not React
        // See: https://github.com/jamiebuilds/unstated#introducing-unstated
        await this.setState(state => {
            const list = state.list.map(item => {
                if (item.id !== id) return item;
                return {
                    ...item,
                    completed
                }
            });
            return {list}
        });

        this.syncStorage()
    };

    createTodo = async text => {
        await this.setState(state => {
            let lastId = state.list[state.list.length - 1];
            const item = {
                completed: false,
                text,
                id: (lastId ? lastId.id : 0) + 1
            };

            const list = state.list.concat(item);
            return {list}
        });

        this.syncStorage()
    };

    removeTodo = async id => {
        let list = this.getList();
        list.forEach((v, i) => list.splice(i, list[i].id === id ? 1 : 0));
        await this.setState({
            list
        });

        this.syncStorage();
    };
    getActiveButton = () => {
        console.log(this.state.isActive);
        return this.state.isActive;
    };
    filterTodo = async (activeItem) => {
        await this.setState({
            isActive: activeItem
        });
    }
}

export default TodosContainer
