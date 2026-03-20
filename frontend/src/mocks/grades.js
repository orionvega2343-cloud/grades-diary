// TODO: моковые данные оценок для разработки без бэкенда
export {overalAvgBox}
    const MOCKS = [ // == Моки == //
        {id:1, name:'Иван', grades: [3,4,2,5,5,3,4,4,5]},
        {id: 2,name: 'Даниил', grades:[4,4,4,5,4,3,5]},
        {id: 3,name: 'Мария', grades:[5,4,3,4,5,4,3,4,5]},
        {id: 4,name: 'Дмитрий', grades:[2,3,3,4,5,2,3,5,4,5,5,5]},
        {id: 5,name: 'Алексей', grades:[2,4,5,3]},
        {id: 6,name: 'Светлана', grades:[2,5,4,3,4,5,4,4,5]},
        
    ]

    const overalAvgBox = MOCKS.flatMap(item => item.grades)
    
    



export default MOCKS