/* Deliberatly exposing all of them in global name space */
var h = React.createElement;
var MyList =  React.createClass({
  render: function(){
    var lis = this.props.data.map(function(text, idx){
      return h('li', {key:idx }, text)
    })
    return (
      h('ul', null, lis)
    )
  }
})

var HelloWorldBanner =  React.createClass({
  render: function(){
    return (
      h('div', null, 
        h('h1', null, 'Hello World'),
        h(MyList, {data:['hi','I am','Mozilla']})
       )
    )
  }
})
