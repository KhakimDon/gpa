import { createStore } from "vuex";

export default createStore({
  state: {
    groups: [
      {
        id: 0,
        days: "ПН/CР/ПТ",
        title: "9:00 Математика",
        students: [
          {
            name: "Абдукаюмов Аюбхон",
            gpa: 0,
          },
          {
            name: "Каримов Тимур",
            gpa: 0,
          },
          {
            name: "Корзун Евгений",
            gpa: 0,
          },
          {
            name: "Чарухов Али",
            gpa: 0,
          },
          {
            name: "Мирзабеков Камронбек",
            gpa: 0,
          },
          {
            name: "Шукуров Адхам",
            gpa: 0,
          },
          {
            name: "Ботирхонов Сирожиддин",
            gpa: 0,
          },
        ],
      },
      {
        id: 1,
        days: "ПН/CР/ПТ",
        title: "10:30 Математика",
        students: [
          {
            name: "Фаёзова Мунирабегим",
            gpa: 0,
          },
        ],
      },
      {
        id: 2,
        days: "ПН/CР/ПТ",
        title: "14:00 IT",
        students: [
          {
            name: "Пак Дарья",
            gpa: 0,
          },
          
          {
            name: "Базарбаева Севинч",
            gpa: 0,
          },
          
          {
            name:  "Хасанова Махлиё",
            gpa: 0,
          },
          {
            name:  "Хасанов Сардор",
            gpa: 0,
          },
          {
            name:           "Ахрарходжаева Лола",
            gpa: 0,
          },
          
          {
            name: "Рустамов Бехруз",
            gpa: 0,
          },
          
          {
            name: "Холназаров Дамир",
            gpa: 0,
          },
          
          {
            name: "Ефимов Сергей",
            gpa: 0,
          },
          
          {
            name: "Зайдининова Гавхар",
            gpa: 0,
          },
          
          {
            name: "УмматовАбдусаллох",
            gpa: 0,
          },  
        ],
      },
      {
        id: 3,
        days: "ВТ/ЧТ/СБ",
        title: "18:30 IT",
        students: [
          {
            name:  "Отаёров Давлатбек ",
            gpa: 0,
          },
          {
            name:    "Ибрагимов Абдуллохон   ",
            gpa: 0,
          },
          {
            name:     "Абдуллаева Саида  ",
            gpa: 0,
          },
         
          {
            name:       "Орипов Улугбек  ",
            gpa: 0,
          },
         
          {
            name:         "Бахромов Жамшид  ",
            gpa: 0,
          },
          {
            name:         "Эркинов Миржалол ",
            gpa: 0,
          },
         
          {
            name: "Абдулхамид Севинч ",
            gpa: 0,
          },
         
         
          {
            name: "Асрорходжаев Иброрхим ",
            gpa: 0,
          },
         
          {
            name:   "Каримов Даврон",
            gpa: 0,
          },
        
        ],
      },
      {
        id: 4,
        days: "ВТ/ЧТ/СБ",
        title: "10:00 IT",
        students: [
          {
            name:      "Хасанов Давлатбек",
            gpa: 0,
          },
          {
            name:      "Шукуров Адхам ",
            gpa: 0,
          },
          {
            name:       "Мирзабеков Камронбек",
            gpa: 0,
          },
          {
            name:          "Миркомилова Мухлиса ",
            gpa: 0,
          },
          {
            name:     "Одилжонов Салохиддин",
            gpa: 0,
          },
        
       
        
      
    
       
        ],
      },
      {
        id: 5,
        days: "ВТ/ЧТ/СБ",
        title: "11:30 IT",
        students: [
          {
            name:         "Юлдашев Самир",
            gpa: 0,
          },
          {
            name:      "Суннатуллаев Сардор ",
            gpa: 0,
          },
          {
            name:          "Суннатуллаева Самида",
            gpa: 0,
          },
          {
            name:    "Низомова Зухра ",
            gpa: 0,
          },
          {
            name:      "Низомова Фотима",
            gpa: 0,
          },
        
      
        
     
          
        
        ],
      },
    ],
  },
  getters: {
    groups: (state) => state.groups,
  },
  mutations: {
    HOMEWORK(state,item){
      for(let i of state.groups){
        if(i.id == item[2]){
          for(let j of i.students){
            if(j.name == item[1].name){
              j.gpa = 0
              j.gpa += +item[0]
            }
          }
        }
      }
    },
    CLASSWORK(state,item){
      for(let i of state.groups){
        if(i.id == item[2]){
          for(let j of i.students){
            if(j.name == item[1].name){
              j.gpa += +item[0]
            }
          }
        }
      }
    },
  },
  actions: {
    HOMEWORK({commit}, item){
      commit("HOMEWORK", item)
    },
    CLASSWORK({commit}, item){
      commit("CLASSWORK", item)
    },
  },
  modules: {},
});
