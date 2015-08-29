$(document).ready( function(){
  var cTime = new Date(), month = cTime.getMonth()+1, year = cTime.getFullYear();

    theMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    theDays = ["S", "M", "T", "W", "T", "F", "S"];
    events = [
      [
        "30/"+month+"/"+year, 
        'Corporate Meeting', 
        '#', 
        '#1bbacc', 
        '10:30 AM',
        '30 August 2015',
        'Ang Mo Kio Street 31',
        '<p>Depart from Simei CC at 9.00 AM</p><img src="img/patrick.png" class="timeline-avatar"><img src="assets/img/stewart.png" class="timeline-avatar"><img src="assets/img/joscelin.png" class="timeline-avatar">',
        'today'
      ],    
      [
        "30/"+month+"/"+year, 
        'Lunch with Henry', 
        '#', 
        '#1bbacc', 
        '10:30 AM',
        '30 August 2015',
        '2 North Bridge Road',
        '<p>Depart from Ang Mo Kio St 24 at 9.40 AM</p>',
        'today'
      ],        
      [
        "4/"+month+"/"+year, 
        'Marketing Meeting', 
        '#', 
        '#1bbacc', 
        '9:30 AM',
        '4 August 2015',
        'Ang Mo Kio Street 31',
        '<p>Depart from Pasir Ris St 12 at 9.00 AM</p><img src="img/stewart.png" class="timeline-avatar"><img src="img/joscelin.png" class="timeline-avatar">'
      ],   
      [
        "4/"+month+"/"+year, 
        'Team Volleyball', 
        '#', 
        '#1bbacc', 
        '2:30 PM',
        '4 August 2015',
        'Ang Mo Kio CC Volleyball Court',
        '<p>Depart from Ang Mo Kio Street 31 at 9.00 AM</p><img src="img/patrick.png" class="timeline-avatar"><img src="img/stewart.png" class="timeline-avatar"><img src="img/joscelin.png" class="timeline-avatar">'
      ],         
      [
        "7/"+month+"/"+year, 
        'Lunch with Amy', 
        '#', 
        '#1bbacc', 
        '1:30 PM',
        '7 August 2015',
        '1 Jalan Anak Bukit',
        '<p>Depart from Ang Mo Kio St 24 at 1.00 PM</p><img src="img/joscelin.png" class="timeline-avatar">'
      ],
      [
        "7/"+month+"/"+year, 
        'Marketing Team Outing', 
        '#', 
        '#1bbacc',
        '6:30 PM',
        '7 August 2015',
        '1 Esplanade Drive',
        '<p>Depart from Ang Mo Kio St 24 at 5.45 PM</p>'
      ],      
      [
        "17/"+month+"/"+year, 
        'Milestone Release', 
        '#', 
        '#1bbacc', 
        '4:30 PM',
        '17 August 2015',
        '200 Victoria Street',
        '<p>Depart from Ang Mo Kio St 24 at 4.00 PM</p>'
      ],
      [
        "19/"+month+"/"+year, 
        'Corporate Outreach', 
        '#', 
        '#1bbacc', 
        '8:30 AM',
        '19 August 2015',
        '10 Simei Street 2',
        '<p>Depart from Pasir Ris St 12 at 8.00 AM</p><img src="img/patrick.png" class="timeline-avatar"><img src="img/stewart.png" class="timeline-avatar">'
      ]
    ];
    $('#calendar').calendar({
        months: theMonths,
        days: theDays,
        events: events,
        popover_options:{
            placement: 'top',
            html: true
        }
    });
});