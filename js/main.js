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
                                        <h4 class="card-title">${train.aimed_departure_time} to ${train.destination_name}</h4>
                                        <h5 class="card-title">Platform: ${train.platform}</h5>
                                        <h5 class="card-title">Arriving in ${train.best_arrival_estimate_mins} minutes</h5>                                        
                                        <p class="card-text">This ${train.operator_name} service is ${train.status}.<br>
                                        It is Expected to arrive at ${train.expected_arrival_time}</p>
                                    </div>
                                </div>`;
            $('#departures').append(departureInfo).hide();
            $('#departures').fadeIn(500);
        };
    });