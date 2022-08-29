




// let newData = [{'region': "Slovakia", 'age': [22]}]
let newData = []
const avrAgeResults = randomPersonData.map(person => person);


let newPeopleData = 
    avrAgeResults
    .filter(person => person.age > 17)
    .reduce((acc, prev)=>{
            // log('acc', acc.region, ' prev', prev.region)
            
            // (acc.region === prev.region )?
            // newData.push({'region': acc.region, 'age': [acc.age]}) :
            // newData.push({'region': acc.region, 'age': acc.age}) 
            // let some = newData.find(item => (item.region === prev.region) ? 'item has '+prev.region: 'noppes' );
            // newData.find(item => log(`newData.region ${item.region}=> `,item.region ===  prev.region, `prev.region: ${prev.region}`) );
            // log(prev.age)
            newData.find(item => {
                    log('item.region',item.region,'- item.age', item.age, 'prev.region', prev.region,'- prev.age',prev.age)
                })
               if(acc.region === prev.region) {
                    newData.forEach(item => {
                        if(item.region === prev.region) {
                             if(acc.region === prev.region) {
                                
                             }
                        }
                    })
                }else {
                    newData.find(item => {
                        (item.region === prev.region) ? item['age'].push[prev.age]: item['age'] = [prev.age]
                    })
                }

            // newData.find(item => {
            //     (item.region === prev.region) ? item.age.push[prev.age]: item.age = prev.age
            // })

            // log("newData['region'] =>",some)
            // if(newData['region'] === acc.region){
            //     newData['age'].push(acc.age);
            // }else {
            //     newData['age'] = [acc.age];
            // }
        })
    // .map(selection => selection)
    
    // randomPersonData[newData] = newData



log(avrAgeResults)
log(`newData`, newData)



const avrAgeRender = () => {
  // nothing yet
}



const avrAgeBtn = document.getElementById('average-age');

btnEventCreator(avrAgeBtn, avrAgeRender, avrAgeResults);