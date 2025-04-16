# Ring Store Uygulaması


## Teknolojiler

### Frontend
- **Next.js** - React tabanlı web framework
- **TypeScript** - Tip güvenliği için
- **Tailwind CSS** - Stil ve UI komponenti
- **Swiper** - Ürün carousel'i için

### Backend
- **Spring Boot** - Java tabanlı backend framework
- **RESTful API** - Veri alışverişi için
- **JSON** - Veri depolama

## Özellikler

- Yüzük koleksiyonu gösterimi
- Altın fiyatı sorgusu 
- Ürün filtreleme ve sıralama
- Detaylı ürün sayfaları
- Responsive tasarım

## Kurulum

### Gereksinimler
- Node.js 
- Java 17 veya üzeri
- Maven

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
mvn spring-boot:run
```

## Çevre Değişkenleri

Hem frontend hem de backend dizinlerinde `.env.example` dosyaları bulunmaktadır. Bunları `.env` dosyalarına kopyalayıp gerekli değerleri girerek kullanabilirsiniz.

### Backend için:
- `goldapi.key`: Altın fiyatı API anahtarı

### Frontend için:
- `NEXT_PUBLIC_API_URL`: Backend API URL'i

## Lisans

MIT 
