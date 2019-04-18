let compareEnvelopes = ( env1, env2 ) => {
  if ( !isParameters( env1, env2 ) ) {
    return '{status: ‘failed’,' +
    ' reason: ‘No or not enough parameters passed to the function ' + compareEnvelopes.name + '\'}';
  }

  if ( ( env1.a > env2.c ) && ( env1.b > env2.d ) ) {
    return 'The larger envelope: ' + env1.id;       
  } else if ( ( env2.c > env1.a ) && ( env2.d > env1.b ) ) {
    return 'The larger envelope: ' + env2.id;       
  } else {
    return  0 + ' - the attachment is not possible';
  }
}



