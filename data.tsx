import { LatLngExpression } from "leaflet";

export interface HistoricData {
  date: string;
  value?: number;
}

export interface ClockData {
  time: number;
  category: string;
}

export const histWater: HistoricData[] = [
  {
    date: "3/16",
    value: 8
  },
  {
    date: "3/17",
    value: 8
  },
  {
    date: "3/18",
    value: 9
  },
  {
    date: "3/19",
    value: 6
  },
  {
    date: "3/20",
    value: 7
  },
  {
    date: "3/21",
    value: 7
  },
  {
    date: "3/22",
    value: 6
  },
  {
    date: "3/23",
    value: 8
  },
  {
    date: "3/24",
    value: 6
  },
  {
    date: "3/25",
    value: 6
  },
  {
    date: "3/26",
    value: 8
  },
  {
    date: "3/27",
    value: 6
  },
  {
    date: "3/28",
    value: 9
  },
  {
    date: "3/29",
    value: 9
  },
  {
    date: "3/30",
    value: 8
  },
  {
    date: "3/31",
    value: 9
  },
  {
    date: "4/1",
    value: 10
  },
  {
    date: "4/2",
    value: 8
  },
  {
    date: "4/3",
    value: 9
  },
  {
    date: "4/4",
    value: 8
  },
  {
    date: "4/5",
    value: 9
  }
];

export const histBreak: HistoricData[] = [
  {
    date: "3/16",
    value: 6
  },
  {
    date: "3/17",
    value: 3
  },
  {
    date: "3/18",
    value: 4
  },
  {
    date: "3/19",
    value: 2
  },
  {
    date: "3/20",
    value: 2
  },
  {
    date: "3/21",
    value: 1
  },
  {
    date: "3/22",
    value: 5
  },
  {
    date: "3/23",
    value: 6
  },
  {
    date: "3/24",
    value: 0
  },
  {
    date: "3/25",
    value: 1
  },
  {
    date: "3/26",
    value: 2
  },
  {
    date: "3/27",
    value: 7
  },
  {
    date: "3/28",
    value: 6
  },
  {
    date: "3/29",
    value: 5
  },
  {
    date: "3/30",
    value: 2
  },
  {
    date: "3/31",
    value: 0
  },
  {
    date: "4/1",
    value: 6
  },
  {
    date: "4/2",
    value: 2
  },
  {
    date: "4/3",
    value: 3
  },
  {
    date: "4/4",
    value: 4
  },
  {
    date: "4/5",
    value: 2
  }
];

export const histExercise: HistoricData[] = [
  {
    date: "3/16",
    value: null
  },
  {
    date: "3/17",
    value: 26
  },
  {
    date: "3/18",
    value: null
  },
  {
    date: "3/19",
    value: 10
  },
  {
    date: "3/20",
    value: 28
  },
  {
    date: "3/21",
    value: null
  },
  {
    date: "3/22",
    value: 24
  },
  {
    date: "3/23",
    value: 17
  },
  {
    date: "3/24",
    value: 32
  },
  {
    date: "3/25",
    value: null
  },
  {
    date: "3/26",
    value: null
  },
  {
    date: "3/27",
    value: null
  },
  {
    date: "3/28",
    value: null
  },
  {
    date: "3/29",
    value: 23
  },
  {
    date: "3/30",
    value: 26
  },
  {
    date: "3/31",
    value: null
  },
  {
    date: "4/1",
    value: 16
  },
  {
    date: "4/2",
    value: null
  },
  {
    date: "4/3",
    value: 38
  },
  {
    date: "4/4",
    value: 28
  },
  {
    date: "4/5",
    value: 24
  }
];

export const todayBreak: ClockData[] = [
  {
    time: 30,
    category: "blank"
  },
  {
    time: 9,
    category: "break"
  },
  {
    time: 90,
    category: "work"
  },
  {
    time: 13,
    category: "break"
  },
  {
    time: 45,
    category: "work"
  },
  {
    time: 15,
    category: "break"
  },
  {
    time: 45,
    category: "work"
  },
  {
    time: 225,
    category: "blank"
  },
  {
    time: 60,
    category: "work"
  },
  {
    time: 10,
    category: "break"
  },
  {
    time: 75,
    category: "work"
  },
  {
    time: 20,
    category: "break"
  },
  {
    time: 73,
    category: "work"
  },
  {
    time: 10,
    category: "blank"
  }
];

export const exerciseRoute: LatLngExpression[] = [
  [34.43547, -119.72511],
  [34.43465, -119.72598],
  [34.43214, -119.72644],
  [34.43015, -119.72694],
  [34.42982, -119.72709],
  [34.42946, -119.72701],
  [34.42928, -119.72688],
  [34.42871, -119.72613],
  [34.42721, -119.72773],
  [34.42742, -119.72917],
  [34.4276, -119.72927],
  [34.42783, -119.72952],
  [34.42844, -119.72983],
  [34.42913, -119.73008],
  [34.42977, -119.73061],
  [34.43016, -119.73095],
  [34.43067, -119.73176],
  [34.43089, -119.73192],
  [34.43232, -119.73192],
  [34.43316, -119.73169],
  [34.43384, -119.73177],
  [34.43473, -119.73173],
  [34.43521, -119.73197],
  [34.43522, -119.73211],
  [34.43561, -119.73228],
  [34.43619, -119.7323],
  [34.43618, -119.72978],
  [34.43567, -119.72918],
  [34.43662, -119.7278],
  [34.43725, -119.72685],
  [34.43547, -119.72511]
];
