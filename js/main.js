var url = 'https://transportapi.com/v3/uk/train/station/HML/live.json?app_id=5691e76c&app_key=c1e033cb1183afe54072f029dd8ded84&darwin=false&train_status=passenger';
// var stnUrl = 'https://raw.githubusercontent.com/fasteroute/national-rail-stations/master/stations.json'

$.ajax({
    dataType: "json",
    url: url
}).done(function (data) {
    console.log(data);
    $('#departures').html('');
    for (var train of data.departures.all) {

            var departureInfo = `<div class="card" style="width: 24rem;">
                                    <div class="card-body">
                                        <h5 class="card-title">${train.destination_name}</h5>
                                        <h6 class="card-text">Platform: ${train.platform}</h6>
                                        <h6 class="card-text">Scheduled arrivial: ${train.aimed_arrival_time}</h6>
                                        <p class="card-text">The ${train.operator_name} service is ${train.status}.</p>
                                    </div>
                                </div>`;
            $('#departures').append(departureInfo).hide();
            $('#departures').fadeIn(500);
        };
    });

//Code to use later, search for specific station
/* $.ajax({
    dataType: "json",
    url: stnUrl
}).done(function (data) {
    console.log(data);
    $('#stations').html('<h3>Stations:</h3>');
    for (var station of data.locations) {
        var stationInfo = `<div class="searchResult card" style="width: 26rem;">
                                <p>The ${station.name} <br> ${station.crs} <br> ${station.tiploc}</p> 
                            </div>`;
        $('#stations').append(stationInfo);
    }
}); */