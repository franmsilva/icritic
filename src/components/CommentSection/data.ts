export const COMMENTS = [
  {
    id: '123',
    user: {
      name: 'Elijah Moss',
      username: 'hexagon.bestagon',
      img: '/users/elijah_moss.jpg',
    },
    content:
      'Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.',
    replies: null,
  },
  {
    id: '345',
    user: {
      name: 'James Skinner',
      username: 'hummingbird1',
      img: '/users/james_skinner.jpg',
    },
    content:
      'Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.',
    replies: [
      {
        id: '123',
        user: {
          name: 'Elijah Moss',
          username: 'hexagon.bestagon',
          img: '/users/elijah_moss.jpg',
        },
        content:
          'Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.',
        replies: null,
      },
      {
        id: '345',
        user: {
          name: 'James Skinner',
          username: 'hummingbird1',
          img: '/users/james_skinner.jpg',
        },
        content:
          'Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.',
        replies: null,
      },
    ],
  },
]
