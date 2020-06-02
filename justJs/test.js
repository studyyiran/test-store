

function getTargetRouter(url, currentRouterConfig ,relative) {
  console.log(relative)
  console.log(currentRouterConfig)
  const targetRouter = currentRouterConfig.find(({ component, ...other }) => {
    console.log(relative || '' + other.path)
    return true
  });
  if (targetRouter) {
    if (targetRouter.subRouter) {
      console.log('here')
      console.log(targetRouter.path)
      return getTargetRouter(url, targetRouter.subRouter, targetRouter.path) || targetRouter
    }  else {
      return targetRouter
    }
  } else {
    return false
  }
}

const routerConfig = [
  {
    path: "/focus",
    title: "focus",
    subRouter: [
      {
        path: "/today",
        exact: true,
        title: "今天",
      },
    ]
  },
];

getTargetRouter('/focus/today', routerConfig)