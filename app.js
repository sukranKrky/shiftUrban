const data=[

    {
        id:1,
        name:"Ray-Ban RB 1971 91493F ",
        img:"/img/gözlük/buyuk-g.jpg",
        price:104.99,
        color:"gray",
        cat:"Glasses"

    },
    {
        id:2,
        name:"Ray-Ban RB 1971 91493F ",
        img:"/img/gözlük/desenli-g.jpg",
        price:159.99,
        color:"gold",
        cat:"Glasses"

    },
    {
        id:3,
        name:"Ray-Ban RB 1971 91493F ",
        img:"/img/gözlük/g-kırmızı.jpg",
        price:99.99,
        color:"red",
        cat:"Glasses"

    },
    {
        id:4,
        name:"Ray-Ban RB 1971 91493F ",
        img:"/img/gözlük/g-yuvarlak2.jpg",
        price:129.99,
        color:"gray",
        cat:"Glasses"

    }
    ,
    {
        id:5,
        name:"kelvin Clin ",
        img:"/img/bandana/bandan-siyah.jpg",
        price:39.99,
        color:"black",
        cat:"Scarf"

    }
    ,
    {
        id:6,
        name:"kelvin Clin ",
        img:"/img/bandana/bandana-s.jpg",
        price:29.99,
        color:"black",
        cat:"Scarf"

    }  ,
    {
        id:7,
        name:"Brunello Cucinelli ",
        img:"/img/şapka/bere-haki.jpg",
        price:59.99,
        color:"green",
        cat:"Hat"

    } ,
    {
        id:8,
        name:"Champion ",
        img:"/img/şapka/bucket2.jpg",
        price:59.99,
        color:"black",
        cat:"Hat"

    },
    {
        id:9,
        name:"Michael Kors ",
        img:"/img/şapka/kep-siyah.jpg",
        price:59.99,
        color:"black",

        cat:"Hat"

    },
    {
        id:10,
        name:"Stetson ",
        img:"/img/şapka/şapka-kahverengi.jpg",
        price:89.99,
        color:"brown",

        cat:"Hat"

    },
    {
        id:11,
        name:"Stetson ",
        img:"/img/şapka/şapka-kırmızı.jpg",
        price:89.99,
        color:"red",

        cat:"Hat"

    },
    {
        id:12,
        name:"Swatch  ",
        img:"/img/saat/gri-saat.jpg",
        price:259.99,
        color:"gray",
        cat:"watch"

    },
    {
        id:13,
        name:"Swatch  ",
        img:"/img/saat/kahve.jpg",
        price:189.99,
        color:"brown",
        cat:"watch"

    },
    {
        id:14,
        name:"Seiko  ",
        img:"/img/saat/yeşil2.jpg",
        price:249.99,
        color:"green",
        cat:"watch"

    }


]

const productContainer= document.querySelector(".products")
const searchInput= document.querySelector(".categorySearch")
const categoriesContainer= document.querySelector(".cats")
const priceRange= document.querySelector(".priceRange")
const priceValue= document.querySelector(".priceValue")
const colorContainer=document.querySelector(".colors")
const col=document.querySelectorAll("#col")

const displayProducts= (filterProducts)=>{
    productContainer.innerHTML=filterProducts.map(
        (product)=>
        `
        <div class="product">
        <label class="new">NEW</label>
        <img src="${product.img}" alt="" class="productImg">
        <span class="name">${product.name}</span>
        <span class="priceText"> $ ${product.price}</span>
        <button class="shopAll">SHOP NOW</button>
        </div>
             
        `

    ).join("");
};

displayProducts(data)

searchInput.addEventListener("keyup",(e)=>{
    const value= e.target.value.toLowerCase();
    if(value){
        displayProducts(data.filter(item => item.name.toLowerCase().indexOf(value)!==-1))
    }else
    displayProducts(data)

})

const setCategory=()=>{
    const allCats= data.map(item=>item.cat)
    const categiries=[
        "All",...allCats.filter((item,i)=>{

            return allCats.indexOf(item)===i;
        })
    ];
    categoriesContainer.innerHTML=categiries.map(cat=>
        ` <span class="cat">${cat}</span>
        `).join("")


        categoriesContainer.addEventListener("click",(e)=>{
            const selectedCat=(e.target.textContent); 
            selectedCat === "All"
            ?displayProducts(data)
            :displayProducts(data.filter((item)=>item.cat===selectedCat))
            
        })
};

const setPrice=()=>{
    const priceList=data.map(item=>item.price);
    const maxPrice=Math.max(...priceList)
    const minPrice=Math.min(...priceList)

    priceRange.min=minPrice;
    priceRange.max=maxPrice;

    priceRange.value=maxPrice;
    priceValue.textContent="$"+maxPrice

    priceRange.addEventListener("input",(e)=>{
        priceValue.textContent="$" +e.target.value;
        displayProducts(data.filter((item)=>item.price<= e.target.value))
    })
}

const setColor=()=>{

    colorContainer.addEventListener("click",(e)=>{
        const selectColor=(e.target.value);
        selectColor===" "?displayProducts(data)
        :displayProducts(data.filter((item)=>item.color===selectColor)) 
    })


     

}



setCategory()
setPrice()
setColor()

