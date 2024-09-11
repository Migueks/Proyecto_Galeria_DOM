const products = [
  {
    discount: false,
    name: "HP Essentials 255 G8 AMD",
    price: 289,
    priceBefore: false,
    stars: 4,
    reviews: 250,
    seller: "PcComponentes",
    freeShip: true,
    promotion: true,
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg",
  },
  {
    discount: "-21%",
    name: "ASUS VivoBook 15 F1504VA-NJ766W Intel Core i7-1355U/16GB/1TB SSD/15.6",
    price: 749,
    priceBefore: 949,
    stars: 4.5,
    reviews: 536,
    seller: "PcComponentes",
    freeShip: true,
    promotion: false,
    image:
      "https://thumb.pccomponentes.com/w-150-150/articles/1081/10811721/1389-asus-vivobook-15-f1504va-nj766w-intel-core-i7-1355u-16gb-1tb-ssd-156.jpg",
  },
  {
    discount: false,
    name: "Lenovo IdeaPad Gaming 3 15ARH7 AMD Ryzen 7 6800H/16GB/512GB SSD/RTX 3050Ti/15.6",
    price: 1039,
    priceBefore: false,
    stars: 4.6,
    reviews: 184,
    seller: "PcComponentes",
    freeShip: true,
    promotion: false,
    image:
      "https://thumb.pccomponentes.com/w-150-150/articles/1079/10796173/1879-lenovo-ideapad-gaming-3-15arh7-amd-ryzen-7-6800h-16gb-512gb-ssd-rtx-3050ti-156.jpg",
  },
  {
    discount: "-23%",
    name: "MSI Pulse 16 AI C1VFKG-023XES Intel Core Ultra 9 185H/32GB/1TB SSD/RTX 4060/16",
    price: 1399,
    priceBefore: 1805.45,
    stars: 4.5,
    reviews: 302,
    seller: "PcComponentes",
    freeShip: true,
    promotion: true,
    image:
      "https://thumb.pccomponentes.com/w-150-150/articles/1082/10822204/1883-msi-pulse-16-ai-c1vfkg-023xes-intel-core-ultra-9-185h-32gb-1tb-ssd-rtx-4060-16.jpg",
  },
  {
    discount: "-31%",
    name: "HP 15S-FQ5085NS Intel Core i5-1235U/16GB/512GB SSD/15.6",
    price: 459,
    priceBefore: 669,
    stars: 4.5,
    reviews: 1131,
    seller: "PcComponentes",
    freeShip: true,
    promotion: true,
    image:
      "https://thumb.pccomponentes.com/w-150-150/articles/1042/10428540/1794-hp-15s-fq5085ns-intel-core-i5-1235u-16gb-512gb-ssd-156.jpg",
  },
  {
    discount: "-20%",
    name: "Lenovo IdeaPad Slim 3 15IAH8 Intel Core i5-12450H/16GB/512GB SSD/15.6",
    price: 479,
    priceBefore: 599,
    stars: 4.6,
    reviews: 854,
    seller: "PcComponentes",
    freeShip: true,
    promotion: false,
    image:
      "https://thumb.pccomponentes.com/w-150-150/articles/1079/10797786/1581-lenovo-ideapad-slim-3-15iah8-intel-core-i5-12450h-16gb-512gb-ssd-156.jpg",
  },
  {
    discount: false,
    name: "ASUS TUF Gaming F17 FX707VV-HX110 Intel Core i7-13620H/32GB/1TB SSD/RTX 4060/17.3",
    price: 1199,
    priceBefore: false,
    stars: 4.6,
    reviews: 931,
    seller: "PcComponentes",
    freeShip: true,
    promotion: true,
    image:
      "https://thumb.pccomponentes.com/w-150-150/articles/1081/10815882/1813-asus-tuf-gaming-f17-fx707vv4-hx110-intel-core-i7-13620h-32gb-1tb-ssd-rtx-4060-173.jpg",
  },
  {
    discount: "-28%",
    name: "ASUS TUF Gaming A15 FA506NC-HN012 AMD Ryzen 5 7535HS/16GB/512GB SSD/RTX 3050/15.6",
    price: 649,
    priceBefore: 899,
    stars: 4.6,
    reviews: 931,
    seller: "PcComponentes",
    freeShip: true,
    promotion: false,
    image:
      "https://thumb.pccomponentes.com/w-150-150/articles/1081/10817650/1412-asus-tuf-gaming-a15-fa506nc-hn012-amd-ryzen-5-7535h-16gb-512gb-ssd-rtx-3050-156.jpg",
  },
  {
    discount: "-21%",
    name: "HP Victus Gaming 16-r0036ns Intel Core i7-13620H/32GB/1TB SSD/RTX 4060/16.1",
    price: 1109,
    priceBefore: 1399,
    stars: 4.5,
    reviews: 787,
    seller: "PcComponentes",
    freeShip: true,
    promotion: true,
    image:
      "https://thumb.pccomponentes.com/w-150-150/articles/1082/10828807/1363-hp-victus-gaming-16-r0036ns-intel-core-i7-13620h-32gb-1tb-ssd-rtx-4060-161-30d96809-76dd-4c80-9557-320067220314.jpg",
  },
  {
    discount: "-18%",
    name: "Acer Aspire 3 A315-59 Intel Core i5-1235U/16GB/512GB SSD/15.6",
    price: 538.99,
    priceBefore: 655.44,
    stars: 4.6,
    reviews: 224,
    seller: "PcComponentes",
    freeShip: true,
    promotion: false,
    image:
      "https://thumb.pccomponentes.com/w-150-150/articles/1081/10818641/1238-acer-aspire-3-a315-59-intel-core-i5-1235u-8gb-512gb-ssd-156.jpg",
  },
];

// Header

const header = document.createElement("header");
document.body.appendChild(header);

const aHeader = document.createElement("a");
aHeader.href = "/";
header.appendChild(aHeader);

const imgHeader = document.createElement("img");
imgHeader.src =
  "https://cdn.pccomponentes.com/img/logos/logo-pccomponentes.svg";
imgHeader.alt = "Logo PcComponentes";
imgHeader.className = "logo";
aHeader.appendChild(imgHeader);

const label = document.createElement("label");
label.setAttribute("for", "btn-menu");
label.className = "categorias";
header.appendChild(label);

const imgLabel = document.createElement("img");
imgLabel.src = "./assets/svg/menu.svg";
imgLabel.alt = "Menú hamburguesa";
label.appendChild(imgLabel);

const pLabel = document.createElement("p");
pLabel.innerText = "Todas las categorías";
label.appendChild(pLabel);

const divCatalgo = document.createElement("div");
divCatalgo.className = "catalogo";
header.appendChild(divCatalgo);

const pCatalogo = document.createElement("p");
pCatalogo.innerText = "Todo el catálogo";
divCatalgo.appendChild(pCatalogo);

const imgCatalogo = document.createElement("img");
imgCatalogo.src = "./assets/svg/triangulo.svg";
imgCatalogo.alt = "Triángulo direccionado hacia abajo para abrir menú";
divCatalgo.appendChild(imgCatalogo);

const divBuscar = document.createElement("div");
divBuscar.className = "buscar";
header.appendChild(divBuscar);

const pBuscar = document.createElement("p");
pBuscar.innerText = "Buscar";
divBuscar.appendChild(pBuscar);

const imgBuscar = document.createElement("img");
imgBuscar.src = "./assets/svg/lupa.svg";
imgBuscar.alt = "Lupa";
divBuscar.appendChild(imgBuscar);

const divCuenta = document.createElement("div");
divCuenta.className = "cuenta";
header.appendChild(divCuenta);

const imgCuenta = document.createElement("img");
imgCuenta.src = "./assets/svg/usuario.svg";
imgCuenta.alt = "Icono usuario";
divCuenta.appendChild(imgCuenta);

const pCuenta = document.createElement("p");
pCuenta.innerText = "Mi cuenta";
divCuenta.appendChild(pCuenta);

const divCarrito = document.createElement("div");
divCarrito.className = "carrito";
header.appendChild(divCarrito);

const imgCarrito = document.createElement("img");
imgCarrito.src = "./assets/svg/carrito.svg";
imgCarrito.alt = "Icono carrito de la compra";
divCarrito.appendChild(imgCarrito);

const pCarrito = document.createElement("p");
pCarrito.innerText = "Mi cesta";
divCarrito.appendChild(pCarrito);

const hr = document.createElement("hr");
hr.className = "hr-top";
document.body.appendChild(hr);

// Ota cosa

const main = document.createElement("main");
document.body.appendChild(main);

const filterSection = document.createElement("section");
filterSection.className = "filters";
main.appendChild(filterSection);

const ulSection = document.createElement("ul");
ulSection.className = "filtros";
filterSection.appendChild(ulSection);

const liRelevancia = document.createElement("li");
liRelevancia.innerText = "Relevancia";
ulSection.appendChild(liRelevancia);

const liPrecioBajo = document.createElement("li");
liPrecioBajo.innerText = "Precio más bajo";
ulSection.appendChild(liPrecioBajo);

const liPrecioAlto = document.createElement("li");
liPrecioAlto.innerText = "Precio más alto";
ulSection.appendChild(liPrecioAlto);

const liVendido = document.createElement("li");
liVendido.innerText = "Más vendidos";
ulSection.appendChild(liVendido);

const liOferta = document.createElement("li");
liOferta.innerText = "Oferta";
ulSection.appendChild(liOferta);

const liValorados = document.createElement("li");
liValorados.innerText = "Mejor valorados";
ulSection.appendChild(liValorados);

const liNovedades = document.createElement("li");
liNovedades.innerText = "Novedades";
ulSection.appendChild(liNovedades);

const productsSection = document.createElement("section");
main.appendChild(productsSection);

const generalDiv = document.createElement("div");
generalDiv.className = "generalDiv";
document.body.appendChild(generalDiv);

// Productos

function createProduct(products) {
  const productDiv = document.createElement("div");
  productDiv.className = "ofertas";
  generalDiv.appendChild(productDiv);

  if (products.discount) {
    const discountProduct = document.createElement("span");
    discountProduct.className = "descuento";
    discountProduct.textContent = `${products.discount}`;
    productDiv.appendChild(discountProduct);
  }

  const imgProduct = document.createElement("img");
  imgProduct.src = products.image;
  imgProduct.alt = `${products.name}`;
  imgProduct.className = "imagen";
  productDiv.appendChild(imgProduct);

  if (products.promotion) {
    const promotionProduct = document.createElement("span");
    promotionProduct.className = "promocion";
    promotionProduct.textContent = "Promoción";
    productDiv.appendChild(promotionProduct);
  }

  const nameProduct = document.createElement("p");
  nameProduct.className = "texto";
  nameProduct.textContent = `${products.name}`;
  productDiv.appendChild(nameProduct);

  const divPrices = document.createElement("div");
  divPrices.className = "precio";
  productDiv.appendChild(divPrices);

  const priceProduct = document.createElement("span");
  priceProduct.className = "red";
  priceProduct.textContent = `${products.price}€`;
  divPrices.appendChild(priceProduct);

  if (products.priceBefore) {
    const priceBeforeProduct = document.createElement("span");
    priceBeforeProduct.className = "tachado";
    divPrices.appendChild(priceBeforeProduct);

    const crossPrice = document.createElement("del");
    crossPrice.textContent = `${products.priceBefore}€`;
    priceBeforeProduct.appendChild(crossPrice);
  }

  const starsProduct = document.createElement("p");
  starsProduct.className = "estrella";
  const filledStars = `<span class="filled-estrella">★</span>`.repeat(
    Math.floor(products.stars)
  );
  const emptyStars = `<span class="empty-estrella">★</span>`.repeat(
    5 - Math.floor(products.stars)
  );
  starsProduct.innerHTML = `Rating: ${filledStars}${emptyStars}`;
  productDiv.appendChild(starsProduct);

  const pccomponentesDiv = document.createElement("div");
  pccomponentesDiv.className = "pccomponentes";
  productDiv.appendChild(pccomponentesDiv);

  const pccomponentesSpan = document.createElement("span");
  pccomponentesSpan.textContent = "Vendido y enviado por: ";
  pccomponentesDiv.appendChild(pccomponentesSpan);

  const pccomponentesStrong = document.createElement("strong");
  pccomponentesStrong.textContent = `${products.seller}`;
  pccomponentesSpan.appendChild(pccomponentesStrong);

  if (products.freeShip) {
    const freeShipProduct = document.createElement("p");
    freeShipProduct.className = "envio";
    freeShipProduct.textContent = "Envío gratis";
    productDiv.appendChild(freeShipProduct);
  }
}

function displayProducts(products) {
  productsSection.innerHTML = "";
  products.forEach((product) => createProduct(product));
}

displayProducts(products);

const hrFooter = document.createElement("hr");
hrFooter.className = "hr-footer";
document.body.appendChild(hrFooter);

const footer = document.createElement("footer");
document.body.appendChild(footer);

const ulFirst = document.createElement("ul");
footer.appendChild(ulFirst);

const liOne = document.createElement("li");
liOne.innerText = "Por qué comprar";
ulFirst.appendChild(liOne);

const liTwo = document.createElement("li");
liTwo.innerText = "Cómo comprar";
ulFirst.appendChild(liTwo);

const liThree = document.createElement("li");
liThree.innerText = "Formas de pago";
ulFirst.appendChild(liThree);

const liFour = document.createElement("li");
liFour.innerText = "Gastos de envío";
ulFirst.appendChild(liFour);

const liFive = document.createElement("li");
liFive.innerText = "Cupones descuentos";
ulFirst.appendChild(liFive);

const liSix = document.createElement("li");
liSix.innerText = "Preguntas frecuentes";
ulFirst.appendChild(liSix);

const liSeven = document.createElement("li");
liSeven.innerText = "Opiniones de clientes";
ulFirst.appendChild(liSeven);

const liEight = document.createElement("li");
liEight.innerText = "Tarjeta regalo";
ulFirst.appendChild(liEight);

const ulSecond = document.createElement("ul");
footer.appendChild(ulSecond);

const liNine = document.createElement("li");
liNine.innerText = "Quiénes somos";
ulSecond.appendChild(liNine);

const liTen = document.createElement("li");
liTen.innerText = "Compromisos";
ulSecond.appendChild(liTen);

const liEleven = document.createElement("li");
liEleven.innerText = "Nuestras tiendas";
ulSecond.appendChild(liEleven);

const liTwelve = document.createElement("li");
liTwelve.innerText = "Nuestras Marcas";
ulSecond.appendChild(liTwelve);

const liThirteen = document.createElement("li");
liThirteen.innerText = "Condiciones de compra";
ulSecond.appendChild(liThirteen);

const liFourteen = document.createElement("li");
liFourteen.innerText = "Afiliados";
ulSecond.appendChild(liFourteen);

const liFifteen = document.createElement("li");
liFifteen.innerText = "Aviso legal";
ulSecond.appendChild(liFifteen);

const liSixteen = document.createElement("li");
liSixteen.innerText = "Privacidad";
ulSecond.appendChild(liSixteen);

const ulThird = document.createElement("ul");
footer.appendChild(ulThird);

const liSeventeen = document.createElement("li");
liSeventeen.innerText = "Contactar";
ulThird.appendChild(liSeventeen);

const liEighteen = document.createElement("li");
liEighteen.innerText = "Contacto y ayuda";
ulThird.appendChild(liEighteen);

const liNineteen = document.createElement("li");
liNineteen.innerText = "Devoluciones y Garantías";
ulThird.appendChild(liNineteen);

const liTwenty = document.createElement("li");
liTwenty.innerText = "Wiki PcComponentes";
ulThird.appendChild(liTwenty);

const liTwentyOne = document.createElement("li");
liTwentyOne.innerText = "Opina y Gana";
ulThird.appendChild(liTwentyOne);

const liTwentyTwo = document.createElement("li");
liTwentyTwo.innerText = "Publicidad";
ulThird.appendChild(liTwentyTwo);

const liTwentyThree = document.createElement("li");
liTwentyThree.innerText = "Trabaja con nosotros";
ulThird.appendChild(liTwentyThree);

const liTwentyFour = document.createElement("li");
liTwentyFour.innerText = "Canal ético";
ulThird.appendChild(liTwentyFour);

const liTwentyFive = document.createElement("li");
liTwentyFive.innerText = "Política de cookies";
ulThird.appendChild(liTwentyFive);

const ulFourth = document.createElement("ul");
footer.appendChild(ulFourth);

const liTwentySix = document.createElement("li");
liTwentySix.innerText = "Otros";
ulFourth.appendChild(liTwentySix);

const liTwentySeven = document.createElement("li");
liTwentySeven.innerText = "Replay";
ulFourth.appendChild(liTwentySeven);

const liTwentyEight = document.createElement("li");
liTwentyEight.innerText = "Black Friday";
ulFourth.appendChild(liTwentyEight);

const liTwentyNine = document.createElement("li");
liTwentyNine.innerText = "Cyber Monday";
ulFourth.appendChild(liTwentyNine);

const liThirty = document.createElement("li");
liThirty.innerText = "PcDays";
ulFourth.appendChild(liThirty);

const liThirtyOne = document.createElement("li");
liThirtyOne.innerText = "Marketplace";
ulFourth.appendChild(liThirtyOne);

const liThirtyTwo = document.createElement("li");
liThirtyTwo.innerText = "Servicio logístico Fulfillment";
ulFourth.appendChild(liThirtyTwo);

const liThirtyThree = document.createElement("li");
liThirtyThree.innerText = "Servicio de reparaciones";
ulFourth.appendChild(liThirtyThree);

const liThirtyFour = document.createElement("li");
liThirtyFour.innerText = "Concursos";
ulFourth.appendChild(liThirtyFour);

const liThirtyFive = document.createElement("li");
liThirtyFive.innerText = "Cita asistencia técnica";
ulFourth.appendChild(liThirtyFive);

const liThirtySix = document.createElement("li");
liThirtySix.innerText = "Responsabilidad Social";
ulFourth.appendChild(liThirtySix);

const liThirtySeven = document.createElement("li");
liThirtySeven.innerText = "Programa de embajadores";
ulFourth.appendChild(liThirtySeven);

const ulCommunity = document.createElement("ul");
footer.appendChild(ulCommunity);

const liTitle = document.createElement("li");
liTitle.innerText = "Comunidad";
ulCommunity.appendChild(liTitle);

const liCommunityOne = document.createElement("li");
ulCommunity.appendChild(liCommunityOne);

const imgOne = document.createElement("img");
imgOne.src = "./assets/img/favicon.png";
imgOne.alt = "Logo PcComponentes";
imgOne.innerText = "Blog";
liCommunityOne.appendChild(imgOne);

const textNodeOne = document.createTextNode("Blog");
liCommunityOne.appendChild(textNodeOne);

const liCommunityTwo = document.createElement("li");
ulCommunity.appendChild(liCommunityTwo);

const imgTwo = document.createElement("img");
imgTwo.src = "./assets/svg/instagram.svg";
imgTwo.alt = "Logo Instagram";
liCommunityTwo.appendChild(imgTwo);

const textNodeTwo = document.createTextNode("Instagram");
liCommunityTwo.appendChild(textNodeTwo);

const liCommunityThree = document.createElement("li");
ulCommunity.appendChild(liCommunityThree);

const imgThree = document.createElement("img");
imgThree.src = "./assets/svg/twitter.svg";
imgThree.alt = "Logo Twitter";
liCommunityThree.appendChild(imgThree);

const textNodeThree = document.createTextNode("Twitter");
liCommunityThree.appendChild(textNodeThree);

const liCommunityFour = document.createElement("li");
ulCommunity.appendChild(liCommunityFour);

const imgFour = document.createElement("img");
imgFour.src = "./assets/svg/facebook.svg";
imgFour.alt = "Logo Facebook";
liCommunityFour.appendChild(imgFour);

const textNodeFour = document.createTextNode("Facebook");
liCommunityFour.appendChild(textNodeFour);

const liCommunityFive = document.createElement("li");
ulCommunity.appendChild(liCommunityFive);

const imgFive = document.createElement("img");
imgFive.src = "./assets/svg/telegram.svg";
imgFive.alt = "Logo telegram";
liCommunityFive.appendChild(imgFive);

const textNodeFive = document.createTextNode("Telegram");
liCommunityFive.appendChild(textNodeFive);

const liCommunitySix = document.createElement("li");
ulCommunity.appendChild(liCommunitySix);

const imgSix = document.createElement("img");
imgSix.src = "./assets/svg/youtube.svg";
imgSix.alt = "Logo YouTube";
liCommunitySix.appendChild(imgSix);

const textNodeSix = document.createTextNode("YouTube");
liCommunitySix.appendChild(textNodeSix);

const liCommunitySeven = document.createElement("li");
ulCommunity.appendChild(liCommunitySeven);

const imgSeven = document.createElement("img");
imgSeven.src = "./assets/svg/tiktok.svg";
imgBuscar.alt = "logo TikTok";
liCommunitySeven.appendChild(imgSeven);

const textNodeSeven = document.createTextNode("TikTok");
liCommunitySeven.appendChild(textNodeSeven);

const liCommunityEight = document.createElement("li");
ulCommunity.appendChild(liCommunityEight);

const imgEight = document.createElement("img");
imgEight.src = "./assets/svg/twitch.svg";
imgEight.alt = "Logo Twitch";
liCommunityEight.appendChild(imgEight);

const textNodeEight = document.createTextNode("Twitch");
liCommunityEight.appendChild(textNodeEight);

const ulLastChild = document.createElement("ul");
ulLastChild.className = "footer-lastchild";
footer.appendChild(ulLastChild);

const liPcComponentes = document.createElement("li");
liPcComponentes.innerText = "PcComponentes en";
ulLastChild.appendChild(liPcComponentes);

const liSpain = document.createElement("li");
liSpain.className = "españa";
ulLastChild.appendChild(liSpain);

const selectSpain = document.createElement("select");
liSpain.appendChild(selectSpain);

const optionSpain = document.createElement("option");
optionSpain.innerText = "España";
selectSpain.appendChild(optionSpain);

const optionPortugal = document.createElement("option");
optionPortugal.innerText = "Portugal";
selectSpain.appendChild(optionPortugal);

const optionFrance = document.createElement("option");
optionFrance.innerText = "Francia";
selectSpain.appendChild(optionFrance);

const optionItaly = document.createElement("option");
optionItaly.innerText = "Italia";
selectSpain.appendChild(optionItaly);

const liVisa = document.createElement("li");
ulLastChild.appendChild(liVisa);

const imgVisa = document.createElement("img");
imgVisa.src = "./assets/img/visa.webp";
imgVisa.className = "visa";
imgVisa.alt = "Logo Visa y Mastercard";
liVisa.appendChild(imgVisa);

const liNothing = document.createElement("li");
ulLastChild.appendChild(liNothing);

const liDownload = document.createElement("li");
liDownload.innerText = "Descarga nuestra App";
liDownload.className = "app";
ulLastChild.appendChild(liDownload);

const liAndorid = document.createElement("li");
liAndorid.className = "andorid";
liAndorid.innerText = "Descarga App Google Play";
ulLastChild.appendChild(liAndorid);

const imgAndroid = document.createElement("img");
imgAndroid.src = "./assets/svg/andorid.svg";
imgAndroid.alt = "Logo Android";
liAndorid.appendChild(imgAndroid);

const liApple = document.createElement("li");
liApple.className = "apple";
liApple.innerText = "Descarga App en App Store";
ulLastChild.appendChild(liApple);

const imgApple = document.createElement("img");
imgApple.src = "./assets/svg/apple.svg";
imgApple.alt = "Logo Apple";
liApple.appendChild(imgApple);

const liQr = document.createElement("li");
liQr.className = "qr";
ulLastChild.appendChild(liQr);

const imgQr = document.createElement("img");
imgQr.src =
  "https://cdn.pccomponentes.com/img/repositorio/otros/qr-app-pcc-es.png";
imgQr.alt = "Código QR";
liQr.appendChild(imgQr);
