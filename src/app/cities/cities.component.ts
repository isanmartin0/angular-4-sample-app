import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  cityList = [ { city_name: "Bandung", prov_name: "Jawa Barat Ciudad con un nombre muy largo para comprobar si las reglas tslint son tenidas en cuenta o por el contrario son ignoradas" },
               { city_name: "Jakarta", prov_name: "DKI Jakarta" },
               { city_name: "Surabaya", prov_name: "Jawa Timur" },
               { city_name: "Yogyakarta", prov_name: "DI Yogyakarta" },
               { city_name: "Semarang", prov_name: "Jawa Tengah" },
               { city_name: "Medan", prov_name: "Sumatera Utara" },
               { city_name: "Tangerang", prov_name: "Banten" },
               { city_name: "Denpasar", prov_name: "Bali" },
               { city_name: "Makasar", prov_name: "Sulawesi Selatan" }]

  constructor() { }

  ngOnInit() {
    console.log("City Component Init");;
  }

  function prueba() {
    i = a += 2, a + b;

    for (var _i = 0; _i < 3; _i++) {
        var theCity = cityList[_i];
        console.log(theCity);
    }
  }

  function getLength(a: string, b: string, c: string) {
    const strings = [];  // Noncompliant
    strings.push(a);
    strings.push(b);
    strings.push(c);

    return a.length + b.length + c.length;
  }

}
