library(plotly)
plot_ly(cars, x = ~speed, y = ~dist) %>%
 add_markers()