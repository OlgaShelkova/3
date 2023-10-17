function learnJavaScript() {
	console.log("Я учу JavaScript!");
}
learnJavaScript();

let images = ['./assets/images/E`dinburg.jpg', './assets/images/Luang-Prabang.jpg']; // пути к картинкам
let currentImage = 0;// Устанавливаем текущий индекс изображения (начально 0)
let imageElement = document.getElementById('image');

function prevImage() { //изменяет текущее изображение на предыдущее
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  updateImage();
}

function nextImage() { // Функция изменяет текущее изображение на следующее
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  updateImage();
}

function updateImage() { //обновляет источник (src) элемента с идентификатором "image" на текущий путь к изображению 
  imageElement.src = images[currentImage];
}

