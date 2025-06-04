import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mic2,
  Sparkles,
  PartyPopper,
  Flame,
  Music,
  Flower2,
  Mail,
  MapPin,
  Instagram
} from 'lucide-react';
import Header from '../components/Header';
import Gallery from '../components/Gallery';
import ShowCard from '../components/ShowCard';

const showFormats = [
  {
    title: "КОРОТКИЙ БЛОК",
    duration: "10 минут",
    description: "Яркое интро: 3–4 эффектных номера в эксклюзивных образах.",
    details: [
      "3–4 песни с быстрыми перевоплощениями",
      "Стиль на выбор: ретро, патриотика, лаунж, современные хиты",
      "Моментально создаём атмосферу праздника",
      "Идеально для приветствия гостей и коротких перерывов"
    ],
    price: "Стоимость — индивидуально",
    icon: <Mic2 className="text-yellow-400 w-8 h-8 animate-fade-in" />
  },
  {
    title: "ДЛИННЫЙ БЛОК",
    duration: "40–60 минут",
    description: "Вокально-танцевальное шоу с полным погружением в атмосферу.",
    details: [
      "8–9 сценических образов, 20–25 песен",
      "Сочетание ретро и современных хитов",
      "На русском и английском",
      "Неожиданные переходы и яркая динамика"
    ],
    price: "Стоимость — индивидуально",
    icon: <Sparkles className="text-yellow-400 w-8 h-8 animate-fade-in" />
  },
  {
    title: "МАСТЕР-КЛАСС",
    duration: "20 минут",
    description: "Танцевальный интерактив: зажигай вместе с MariViliaShow!",
    details: [
      "Стили: буги-вуги, бачата, народные и тематические (Гетсби, Новый год)",
      "Возможен под живой вокал",
      "Вовлекаем каждого гостя — даже интровертов",
      "Настоящий танцевальный флешмоб"
    ],
    price: "Стоимость — индивидуально",
    icon: <PartyPopper className="text-yellow-400 w-8 h-8 animate-fade-in" />
  },
  {
    title: "КОМБО-ПРЕДЛОЖЕНИЯ",
    duration: "30–80 минут",
    description: "Выбирай лучшее — получай больше за выгодную цену.",
    details: [
      "Короткий блок + мастер-класс (30 минут)",
      "Длинный блок + мастер-класс (60–80 минут)",
      "Мастер-класс со скидкой 50%",
      "Максимально разнообразная программа"
    ],
    price: "Мастер-класс —50%",
    icon: <Flame className="text-yellow-400 w-8 h-8 animate-fade-in" />
  },
  {
    title: "ФОРМАТ «СТАНДАРТ»",
    duration: "2 × 45 минут",
    description: "Фоновый вокал в вашем стиле — элегантно и небанально.",
    details: [
      "Вокальное выступление без смены образов",
      "Стиль по вашему запросу",
      "Создаём комфортную музыкальную атмосферу",
      "Оптимально для деловых и камерных событий"
    ],
    price: "Стоимость — индивидуально",
    icon: <Music className="text-yellow-400 w-8 h-8 animate-fade-in" />
  },
  {
    title: "WELCOME УСЛУГИ",
    duration: "по запросу",
    description: "Встреча гостей и спецномера — создаём первое впечатление.",
    details: [
      "Встреча с караваем и живым вокалом",
      "«На заре» — народный стиль или модный переход",
      "Эксклюзивные спецномера по теме вашего праздника",
      "Уникальные открытия для любых событий"
    ],
    price: "Стоимость — индивидуально",
    icon: <Flower2 className="text-yellow-400 w-8 h-8 animate-fade-in" />
  }
];

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    guests: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#3b0a24] to-black text-white overflow-x-hidden font-serif">
      <Header />

      {/* Фоновый particle-эффект */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-yellow-300 rounded-full animate-ping opacity-30 animation-delay-1000"></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-yellow-500 rounded-full animate-pulse opacity-40 animation-delay-2000"></div>
        <div className="absolute bottom-40 right-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-20"></div>
      </div>

      {/* Главная секция */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
        <div className="text-center z-10 px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent animate-glow">
            MariViliaShow
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-yellow-200 font-light animate-fade-in animation-delay-500">
            Твой идеальный вечер: бурлеск, вокал, танцы, стиль.
          </p>
          <Button 
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/25 animate-fade-in animation-delay-1000"
            onClick={() => document.getElementById('show')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Now ✨
          </Button>
        </div>
        {/* Силуэт */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-64 opacity-20">
          <div className="w-full h-full bg-gradient-to-t from-yellow-400/30 to-transparent rounded-full filter blur-xl"></div>
        </div>
      </section>

      {/* Форматы шоу */}
      <section id="show" className="min-h-screen py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto animate-fade-in">
          <h2 className="text-5xl font-bold text-center mb-8 text-yellow-400 animate-glow">Форматы MariViliaShow</h2>
          <p className="text-center text-yellow-200 mb-16 text-xl">Делаем атмосферу, которую гости будут вспоминать.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {showFormats.map((format, index) => (
              <ShowCard
                key={index}
                title={format.title}
                duration={format.duration}
                description={format.description}
                details={format.details}
                price={format.price}
                icon={format.icon}
              />
            ))}
          </div>
          <div className="text-center">
            <p className="text-xl text-yellow-200 mb-6">
              Оставьте заявку и получите персональное предложение на ваш праздник!
            </p>
            <Button 
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500 text-black font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/25"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Получить предложение ✨
            </Button>
          </div>
        </div>
      </section>

      {/* Галерея */}
      <section id="gallery" className="min-h-screen py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto animate-fade-in">
          <h2 className="text-5xl font-bold text-center mb-16 text-yellow-400 animate-glow">Галерея</h2>
          <Gallery />
        </div>
      </section>

      {/* Бронирование */}
      <section id="booking" className="min-h-screen py-20 px-4 bg-gradient-to-b from-black to-[#3b0a24]">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-5xl font-bold text-center mb-16 text-yellow-400 animate-glow">Забронировать вечер</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-black/50 border-yellow-400/30 animate-fade-in">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-yellow-400 mb-2">Имя</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-black/70 border-yellow-400/50 text-white focus:border-yellow-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-yellow-400 mb-2">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-black/70 border-yellow-400/50 text-white focus:border-yellow-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-yellow-400 mb-2">Дата</label>
                    <Input
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="bg-black/70 border-yellow-400/50 text-white focus:border-yellow-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-yellow-400 mb-2">Количество гостей</label>
                    <Input
                      name="guests"
                      type="number"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="bg-black/70 border-yellow-400/50 text-white focus:border-yellow-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-yellow-400 mb-2">Сообщение</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-black/70 border-yellow-400/50 text-white focus:border-yellow-400 min-h-[100px]"
                      placeholder="Особые пожелания..."
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500 text-black font-bold py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/25"
                  >
                    Reserve Now ✨
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-yellow-400 mb-6">Контакты</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="text-yellow-400 w-6 h-6" />
                    <span className="text-lg">MariViliaShow@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Instagram className="text-yellow-400 w-6 h-6" />
                    <span className="text-lg">@marivilia_show</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="text-yellow-400 w-6 h-6" />
                    <span className="text-lg">Москва, по заявкам</span>
                  </div>
                </div>
              </div>
              <div className="bg-black/30 p-6 rounded-lg animate-fade-in">
                <h4 className="text-xl font-bold text-yellow-400 mb-4">Для частных событий</h4>
                <p className="text-gray-300">
                  Любое мероприятие станет особенным с MariViliaShow! Напишите нам — подберём формат, согласуем детали и цены для вашего события.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-black py-8 px-4 border-t border-yellow-400/20 animate-fade-in">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <Instagram className="w-6 h-6 text-yellow-400 hover:text-yellow-300 cursor-pointer transition-colors" />
            <Mail className="w-6 h-6 text-yellow-400 hover:text-yellow-300 cursor-pointer transition-colors" />
          </div>
          <p className="text-gray-400">© MariViliaShow, 2025. Все права защищены.</p>
          <div className="flex justify-center space-x-4 mt-2 text-sm text-gray-500">
            <span className="hover:text-yellow-400 cursor-pointer">Политика конфиденциальности</span>
            <span>•</span>
            <span className="hover:text-yellow-400 cursor-pointer">Условия использования</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
