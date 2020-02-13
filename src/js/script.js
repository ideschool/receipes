class TestForm {
    constructor() {
        this.sendMeButton = document.querySelector('#send-me');
        this.sendMeButton.addEventListener('click', this.formSubmit.bind(this));
        this.url = 'http://localhost:3000/db/sklepik';
        this.table = document.querySelector('#user-table > tbody');
    }

    async formSubmit() {
        const items = await this.getData();
        this.clearTableBody();
        items.forEach((item) => {
            const row = this.createRow(item);
            this.table.appendChild(row);
        });
    }

    getData() {
        return fetch(this.url).then(response => response.json())
    };

    createCell(value) {
        const td = document.createElement('td');
        td.innerText = value;
        return td;
    }

    clearTableBody() {
        this.table.innerHTML = '';
    }

    createRow(item) {
        const tr = document.createElement('tr');
        ['name', 'price', 'count'].forEach(key => {
            tr.appendChild(this.createCell(item.data[key]));
        });
        return tr;
    }
}

const testForm = new TestForm();
