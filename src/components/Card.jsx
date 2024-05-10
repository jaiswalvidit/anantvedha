import React from 'react';

function TimelineEvent({ date, title, description }) {
  return (
    <div className="timeline__event animated fadeInDown">
      <div className="timeline__event__date">{date}</div>
      <div className="timeline__event__content">
        <div className="timeline__event__title">{title}</div>
        <div className="timeline__event__description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

function Card() {
  const timelineData = [
    { date: 'September 1985', title: 'Super Mario Brothers', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!' },
    { date: 'June 1986', title: 'Super Mario Bros: The Lost Levels', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!' },
    { date: 'October 1988', title: 'Super Mario Bros. 2', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!' },
    { date: 'October 1988', title: 'Super Mario Bros. 3', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!' },
    // Add more timeline data here...
  ];

  return (
    <div>
      <div class="timeline">

{/* <!--first--> */}
<div class="timeline__event  animated fadeInDown delay-1s timeline__event--type4">
    <div class="timeline__event__icon ">
        {/* <!-- <i class="lni-sport"></i>--> */}

    </div>
    <div class="timeline__event__date">
        September 1985
    </div>
    <div class="timeline__event__content ">
        <div class="timeline__event__title">
            Super Mario Brothers
        </div>
        <div class="timeline__event__description">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
        </div>
    </div>
</div>

{/* <!--second--> */}

<div class="timeline__event animated fadeInDown delay-2s timeline__event--type3">
    <div class="timeline__event__icon">
        {/* <!-- <i class="lni-sport"></i>--> */}

    </div>
    <div class="timeline__event__date">
        June 1986
    </div>
    <div class="timeline__event__content">
        <div class="timeline__event__title">
            Super Mario Bros: The Lost Levels
        </div>
        <div class="timeline__event__description">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
        </div>
    </div>
</div>

{/* <!--third--> */}

<div class="timeline__event animated fadeInDown delay-3s timeline__event--type2">
    <div class="timeline__event__icon">
        {/* <!-- <i class="lni-sport"></i>--> */}

    </div>
    <div class="timeline__event__date">
        October 1988
    </div>
    <div class="timeline__event__content">
        <div class="timeline__event__title">
            Super Mario Bros. 2
        </div>
        <div class="timeline__event__description">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
        </div>

    </div>
</div>

{/* <!--forth--> */}

<div class="timeline__event animated fadeInDown delay-4s timeline__event--type1">
    <div class="timeline__event__icon">
        {/* <!-- <i class="lni-sport"></i>--> */}

    </div>
    <div class="timeline__event__date">
        October 1988
    </div>
    <div class="timeline__event__content">
        <div class="timeline__event__title">
            Super Mario Bros. 3
        </div>
        <div class="timeline__event__description">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
        </div>
    </div>
</div>


</div>
    </div>
  );
}

export default Card;
