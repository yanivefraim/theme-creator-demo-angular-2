---
layout: main-page
title: Hello World!!
tagline: Supporting tagline
---
{% include JB/setup %}

{% contentfor home-section-1 %}
###section1
Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, it's easy to try it out on a small feature in an existing project.
{% endcontentfor %}

{% contentfor home-section-2 %}
###section2
Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, it's easy to try it out on a small feature in an existing project.
{% endcontentfor %}

{% contentfor home-section-3 %}
###section3
Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, it's easy to try it out on a small feature in an existing project.
{% endcontentfor %}

##A Simple Component
React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.


##A Stateful Component
In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component's state data changes, the rendered markup will be updated by re-invoking render().
