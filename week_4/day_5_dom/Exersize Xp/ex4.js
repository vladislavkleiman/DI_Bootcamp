const allBooks = []

const book1 = {
    title: 'Divine Rivals: A Novel',
    author: 'Rebecca Ross',
    img: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781250857439_p0_v3_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D',
    alreadyRead: true
}

const book2 = {
    title: 'Ruthless Vows',
    author: 'Rebecca Ross',
    img: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781250350923_p0_v1_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D',
    alreadyRead: false
}

const book3 = {
    title: 'Iron Flame',
    author: 'Rebecca Yarros',
    img:'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781649374172_p0_v11_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D',
    alreadyRead: true
}

const book4 = {
    title: 'Fourth Wing',
    author: 'Rebecca Yarros',
    img:'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781649374042_p0_v9_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bwebp%5D',
    alreadyRead: false

}

allBooks.push(book1, book2, book3, book4)


console.log(allBooks);

const table = document.createElement('table')

table.innerHTML = `
    <table>
        <thead>
            <tr>
                <th>My books</th>
            </tr>
        </thead>
        <tbody>
            
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Image</th>
                <th>Already Read</th>
            </tr>
            <tr>
                <td>${allBooks[0].title}</td>
                <td>${allBooks[0].author}</td>
                <td>
                    <img src='${allBooks[0].img}'/>
                </td>
                <td class='${allBooks[0].alreadyRead ? 'is-read' : ''}'></
                <td>${allBooks[0].alreadyRead}</td>
                
            </tr>
            <tr>
                <td>${allBooks[1].title}</td>
                <td>${allBooks[1].author}</td>
                <td>
                    <img src='${allBooks[1].img}'/>
                </td>
                <td class='${allBooks[1].alreadyRead ? 'is-read' : ''}'></
                <td>${allBooks[1].alreadyRead}</td>
            </tr>
            <tr>
                <td>${allBooks[2].title}</td>
                <td>${allBooks[2].author}</td>
                <td>
                    <img src='${allBooks[2].img}'/>
                </td>
                <td class='${allBooks[2].alreadyRead ? 'is-read' : ''}'></
                <td>${allBooks[2].alreadyRead}</td>
            </tr>
            <tr>
                <td>${allBooks[3].title}</td>
                <td>${allBooks[3].author}</td>
                <td>
                <img src='${allBooks[3].img}'/>
            </td>
                <td class='${allBooks[3].alreadyRead ? 'is-read' : ''}'></
                <td>${allBooks[3].alreadyRead}</td>
        </tr>
        </tbody>
    </table>
`


const booksListDiv = document.querySelector('.listBooks')

booksListDiv.appendChild(table)

//<td>${allBooks[0].img}</td>