const express=require('express')
const app=express()
const booksrouter=express.Router()

app.use(express.static('./public'))
app.set('view engine','ejs')
app.set('views','./src/views')
app.use('/books',booksrouter)
app.get('/',function(req,res){
    res.render('books',
    {nav:[{link:'/books',name:'books'},{link:'/authors',name:'authors'}],
    title:'library'

    })
})

booksrouter.get('/',function(req,res){
    res.render('indexproject',
    {nav:[{link:'/books',name:'books'},{link:'/authors',name:'authors'}],
    title:'library'

    })
})

app.listen('4004')
console.log("ok")
