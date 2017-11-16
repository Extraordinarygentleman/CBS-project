import { Component } from '@angular/core';
import {Http} from '@angular/http';
//elk land heeft een naam en een map met waardes (key, values).
//key is het jaar taal en value is de waarde van dit jaartal.
class Country {

    name: string;
    values = new Map();
    constructor(name:string)
	{
		this.name = name;
	}
    setvalue(year,value) {
        this.values.set(year,value);
    }
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})


export class AppComponent {
  title = 'Vluchtelingen';
  countryArray: Array<Country> = [];
  jsonData;


   // lineChart
  public lineChartData:Array<any> = [
  {data: [], label: ''},
  {data: [], label: ''},
  {data: [], label: ''},
  {data: [], label: ''},
  {data: [], label: ''},
  {data: [], label: ''},
  {data: [], label: ''},
  {data: [], label: ''},
  {data: [], label: ''},
  {data: [], label: ''},
  {data: [], label: ''},
  {data: [], label: ''},
  {data: [], label: ''},
  {data: [], label: ''},
  {data: [], label: ''},
  {data: [], label: ''},
  {data: [], label: ''}
  ];
  public lineChartLabels:Array<any> = ['1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982','1983','1984','1985','1986','1987','1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016',];
  public lineChartOptions:any = {
    responsive: true
  };

  color1 = ('rgba('+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255));
  color2 = ('rgba('+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255));
  color3 = ('rgba('+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255));
  color4 = ('rgba('+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255));
  color5 = ('rgba('+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255));
  color6 = ('rgba('+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255));
  color7 = ('rgba('+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255));
  color8 = ('rgba('+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255));
  color9 = ('rgba('+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255));
  color10 = ('rgba('+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255));
  color11 = ('rgba('+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255));
  color12 = ('rgba('+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255));
  color13 = ('rgba('+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255));
  color14 = ('rgba('+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255));
  color15 = ('rgba('+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255));
  color16 = ('rgba('+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255));
  color17 = ('rgba('+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * 255));

  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: this.color1 +',0.2)',
      borderColor: this.color1 + ',1)',
      pointBackgroundColor: this.color1 + ',1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: this.color1 + ',0.8)'
    },
    { // grey
      backgroundColor: this.color2 +',0.2)',
      borderColor: this.color2 + ',1)',
      pointBackgroundColor: this.color12+ ',1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: this.color2 + ',0.8)'
    },
    { // grey
      backgroundColor: this.color3 +',0.2)',
      borderColor: this.color3 + ',1)',
      pointBackgroundColor: this.color3 + ',1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: this.color3 + ',0.8)'
    },
    { // grey
      backgroundColor: this.color4 +',0.2)',
      borderColor: this.color4 + ',1)',
      pointBackgroundColor: this.color4 + ',1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: this.color4 + ',0.8)'
    },
    { // grey
      backgroundColor: this.color5 +',0.2)',
      borderColor: this.color5 + ',1)',
      pointBackgroundColor: this.color5 + ',1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: this.color5 + ',0.8)'
    },
    { // grey
      backgroundColor: this.color6 +',0.2)',
      borderColor: this.color6 + ',1)',
      pointBackgroundColor: this.color6 + ',1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: this.color6 + ',0.8)'
    },
    { // grey
      backgroundColor: this.color7 +',0.2)',
      borderColor: this.color7 + ',1)',
      pointBackgroundColor: this.color7 + ',1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: this.color7 + ',0.8)'
    },
    { // grey
      backgroundColor: this.color8 +',0.2)',
      borderColor: this.color8 + ',1)',
      pointBackgroundColor: this.color8 + ',1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: this.color8 + ',0.8)'
    },
    { // grey
      backgroundColor: this.color9 +',0.2)',
      borderColor: this.color9 + ',1)',
      pointBackgroundColor: this.color9 + ',1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: this.color9 + ',0.8)'
    },
    { // grey
      backgroundColor: this.color10 +',0.2)',
      borderColor: this.color10 + ',1)',
      pointBackgroundColor: this.color10 + ',1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: this.color10 + ',0.8)'
    },
    { // grey
      backgroundColor: this.color11 +',0.2)',
      borderColor: this.color11 + ',1)',
      pointBackgroundColor: this.color11 + ',1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: this.color11 + ',0.8)'
    },
    { // grey
      backgroundColor: this.color12 +',0.2)',
      borderColor: this.color12 + ',1)',
      pointBackgroundColor: this.color12 + ',1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: this.color12 + ',0.8)'
    },
    { // grey
      backgroundColor: this.color13 +',0.2)',
      borderColor: this.color13 + ',1)',
      pointBackgroundColor: this.color13 + ',1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: this.color13 + ',0.8)'
    },
    { // grey
      backgroundColor: this.color14 +',0.2)',
      borderColor: this.color14 + ',1)',
      pointBackgroundColor: this.color14 + ',1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: this.color14 + ',0.8)'
    },
    { // grey
      backgroundColor: this.color15 +',0.2)',
      borderColor: this.color15 + ',1)',
      pointBackgroundColor: this.color15 + ',1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: this.color15 + ',0.8)'
    },
    { // grey
      backgroundColor: this.color16 +',0.2)',
      borderColor: this.color16 + ',1)',
      pointBackgroundColor: this.color16 + ',1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: this.color16 + ',0.8)'
    },
    { // grey
      backgroundColor: this.color17 +',0.2)',
      borderColor: this.color17 + ',1)',
      pointBackgroundColor: this.color17 + ',1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: this.color17 + ',0.8)'
    },
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  public lineChartDataAfghanistan:Array<any> = [
  {data: [], label: ''},];

  public lineChartLabelsAfghanistan:Array<any> = ['1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982','1983','1984','1985','1986','1987','1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016',];
  public lineChartOptionsAfghanistan:any = {
    responsive: true
  };

  public lineChartColorsAfghanistan:Array<any> = [
    { // grey
      backgroundColor: this.color1 +',0.2)',
      borderColor: this.color1 + ',1)',
      pointBackgroundColor: this.color1 + ',1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: this.color1 + ',0.8)'
    },];
 public lineChartLegendAfghanistan:boolean = false;
  public lineChartTypeAfghanistan:string = 'line';

  public lineChartDataPolen:Array<any> = [
  {data: [], label: ''},];

  public lineChartLabelsPolen:Array<any> = ['1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982','1983','1984','1985','1986','1987','1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016',];
  public lineChartOptionsPolen:any = {
    responsive: true
  };

  public lineChartColorsPolen:Array<any> = [
    { // grey
      backgroundColor: this.color3 +',0.2)',
      borderColor: this.color3 + ',1)',
      pointBackgroundColor: this.color3 + ',1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: this.color3 + ',0.8)'
    },];
  
  public lineChartLegendPolen:boolean = false;
  public lineChartTypePolen:string = 'line';
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  			//lees json uit
          constructor(private http:Http) {
                this.http.get('/assets/dataverzoek.json')
                //leest async json uit
               .subscribe(res => {
               	this.jsonData = res.json()
               	//voor elke json value
               	for(let jsonValue of this.jsonData.value)
               	{
               		let exists = false;
               		//kijkt of land al bestaat in de country array, 
               		//zo niet maak nieuw land classe object aan,
               		//zo wel dan voeg jaartal en waarde toe aan huidig land

               		//check of er al landen zijn gevonden
               		if(this.countryArray.length != 0)
               		{
	               		 let country =  this.countryArray.find(x => x.name.toLowerCase() == jsonValue.Nationaliteit.toLowerCase());
	               		 
	               		 //land bestaat al
	               		 if(country != null)
	               		 {
	               		 	country.setvalue(+jsonValue.Perioden,+jsonValue.TotaalAsielverzoekenEnNareizigers_1)
	               		  	
	               		 }

	               		 //land bestaat nog niet
	               		 else
	               		 {
	               		 	country = new Country(jsonValue.Nationaliteit);
	               			country.setvalue(+jsonValue.Perioden,+jsonValue.TotaalAsielverzoekenEnNareizigers_1)
	                		this.countryArray.push(country);
	               		 }

               		}
               		
               		//als er nog geen landen zijn opgeslagen
               		else
               		{
               			let country = new Country(jsonValue.Nationaliteit);
	               		country.setvalue(+jsonValue.Perioden,+jsonValue.TotaalAsielverzoekenEnNareizigers_1)
	                	this.countryArray.push(country);
               		}
           		}


               	console.log(this.countryArray);              	
               	let _lineChartData = [];
               	let _lineChartDataAfghanistan =[];
               	let _lineChartDataPolen =[];
               	for(let country of this.countryArray)
               	{

               		if(country.name.toLowerCase() == "pools")
               		{
               			_lineChartDataPolen.push({data:[
               			country.values.get(1975) || 0,
               			country.values.get(1976) || 0,
               			country.values.get(1977) || 0,
               			country.values.get(1978) || 0,
               			country.values.get(1979) || 0,
               			country.values.get(1980) || 0,
               			country.values.get(1981) || 0,
               			country.values.get(1982) || 0,
               			country.values.get(1983) || 0,
               			country.values.get(1984) || 0,
               			country.values.get(1985) || 0,
               			country.values.get(1986) || 0,
               			country.values.get(1987) || 0,
               			country.values.get(1988) || 0,
               			country.values.get(1989) || 0,
               			country.values.get(1990) || 0,
               			country.values.get(1991) || 0,
               			country.values.get(1992) || 0,
               			country.values.get(1993) || 0,
               			country.values.get(1994) || 0,
               			country.values.get(1995) || 0,
               			country.values.get(1996) || 0,
               			country.values.get(1997) || 0,
               			country.values.get(1998) || 0,
               			country.values.get(1999) || 0,
               			country.values.get(2000) || 0,
               			country.values.get(2001) || 0,
               			country.values.get(2002) || 0,
               			country.values.get(2003) || 0,
               			country.values.get(2004) || 0,
               			country.values.get(2005) || 0,
               			country.values.get(2006) || 0,
               			country.values.get(2007) || 0,
               			country.values.get(2008) || 0,
               			country.values.get(2009) || 0,
               			country.values.get(2010) || 0,
               			country.values.get(2011) || 0,
               			country.values.get(2012) || 0,
               			country.values.get(2013) || 0,
               			country.values.get(2014) || 0,
               			country.values.get(2015) || 0,
               			country.values.get(2016) || 0],
               			label: country.name});	
               		}
               		if(country.name.toLowerCase() == "afghaans")
               		{
               			_lineChartDataAfghanistan.push({data:[
               			country.values.get(1975) || 0,
               			country.values.get(1976) || 0,
               			country.values.get(1977) || 0,
               			country.values.get(1978) || 0,
               			country.values.get(1979) || 0,
               			country.values.get(1980) || 0,
               			country.values.get(1981) || 0,
               			country.values.get(1982) || 0,
               			country.values.get(1983) || 0,
               			country.values.get(1984) || 0,
               			country.values.get(1985) || 0,
               			country.values.get(1986) || 0,
               			country.values.get(1987) || 0,
               			country.values.get(1988) || 0,
               			country.values.get(1989) || 0,
               			country.values.get(1990) || 0,
               			country.values.get(1991) || 0,
               			country.values.get(1992) || 0,
               			country.values.get(1993) || 0,
               			country.values.get(1994) || 0,
               			country.values.get(1995) || 0,
               			country.values.get(1996) || 0,
               			country.values.get(1997) || 0,
               			country.values.get(1998) || 0,
               			country.values.get(1999) || 0,
               			country.values.get(2000) || 0,
               			country.values.get(2001) || 0,
               			country.values.get(2002) || 0,
               			country.values.get(2003) || 0,
               			country.values.get(2004) || 0,
               			country.values.get(2005) || 0,
               			country.values.get(2006) || 0,
               			country.values.get(2007) || 0,
               			country.values.get(2008) || 0,
               			country.values.get(2009) || 0,
               			country.values.get(2010) || 0,
               			country.values.get(2011) || 0,
               			country.values.get(2012) || 0,
               			country.values.get(2013) || 0,
               			country.values.get(2014) || 0,
               			country.values.get(2015) || 0,
               			country.values.get(2016) || 0],
               			label: country.name});	
               		}
               		_lineChartData.push({data:[
               			country.values.get(1975) || 0,
               			country.values.get(1976) || 0,
               			country.values.get(1977) || 0,
               			country.values.get(1978) || 0,
               			country.values.get(1979) || 0,
               			country.values.get(1980) || 0,
               			country.values.get(1981) || 0,
               			country.values.get(1982) || 0,
               			country.values.get(1983) || 0,
               			country.values.get(1984) || 0,
               			country.values.get(1985) || 0,
               			country.values.get(1986) || 0,
               			country.values.get(1987) || 0,
               			country.values.get(1988) || 0,
               			country.values.get(1989) || 0,
               			country.values.get(1990) || 0,
               			country.values.get(1991) || 0,
               			country.values.get(1992) || 0,
               			country.values.get(1993) || 0,
               			country.values.get(1994) || 0,
               			country.values.get(1995) || 0,
               			country.values.get(1996) || 0,
               			country.values.get(1997) || 0,
               			country.values.get(1998) || 0,
               			country.values.get(1999) || 0,
               			country.values.get(2000) || 0,
               			country.values.get(2001) || 0,
               			country.values.get(2002) || 0,
               			country.values.get(2003) || 0,
               			country.values.get(2004) || 0,
               			country.values.get(2005) || 0,
               			country.values.get(2006) || 0,
               			country.values.get(2007) || 0,
               			country.values.get(2008) || 0,
               			country.values.get(2009) || 0,
               			country.values.get(2010) || 0,
               			country.values.get(2011) || 0,
               			country.values.get(2012) || 0,
               			country.values.get(2013) || 0,
               			country.values.get(2014) || 0,
               			country.values.get(2015) || 0,
               			country.values.get(2016) || 0],
               			label: country.name});
               	}

               	this.lineChartData = _lineChartData;
               	this.lineChartDataAfghanistan = _lineChartDataAfghanistan;
               	this.lineChartDataPolen = _lineChartDataPolen;
               });
  }
 onSelect()
 {
 	console.log("olaaaskidee");
 }

}
