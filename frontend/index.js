// console.log("HELLO FRONTEND");
$.get( "http://localhost:3000/", function( data ) {
  $( "body" )

   // Get name of city
   dataKota = data;
   const kota = dataKota.content.location.address;
   console.log(kota);

   // Get location
   dataDerajat = data;
   const latitude = dataDerajat.content.location.latitude;
   const longitude = dataDerajat.content.location.longitude;
   console.log(latitude);
   console.log(longitude);

   // Get current date
   dataTanggal = data;
   const tanggal = dataTanggal.content.time.date;
   const time = dataTanggal.content.time.time;
   console.log(tanggal);
   console.log(time);

   //Get time of prayer
   dataSholat = data;
   const fajr = dataSholat.content.data.Fajr;
   const sunrise = dataSholat.content.data.Sunrise;
   const Dhuhr = dataSholat.content.data.Dhuhr;
   const Asr = dataSholat.content.data.Asr;
   const Maghrib = dataSholat.content.data.Maghrib;
   const Isha = dataSholat.content.data.Isha;
   console.log('Subuh : ' + fajr);
   console.log('Dzuhur : ' + Dhuhr);
   console.log('Ashar : ' + Asr);
   console.log('Maghrib : ' + Maghrib);
   console.log('Isya : ' + Isha);


    const newRow = `
    <tr>
      <th scope="row"> Kota : ${kota}</th>
      <td>Latitude : ${latitude}</td>
      <td>Longitude ${longitude}</td>
      <td>Tanggal : ${tanggal}</td>
      <td>Jam : ${time}</td>
      <td>Subuh : ${fajr}</td>
      <td>Dzuhur ${Dhuhr}</td>
      <td>Ashar : ${Asr}</td>
      <td>Maghrib : ${Maghrib}</td>
      <td>Isya : ${Isha}</td>
    </tr>
    `
     $("#app-table-body").append(newRow)


}, "json" );


