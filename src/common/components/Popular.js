import React, { Component } from 'react'
import BlueprintCard from './BlueprintCard'

const blueprints = [
  {
    id: 1,
    language: 'php',
    type: 'controller',
    title: 'PHP controller',
    snippet: `
<?php

use App\Controller\Base as BaseController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ControllerName extends BaseController
{
  /**
   * Get action
   *
   * @param  Request $request
   * @return Response
   */
  public function getAction(Request $request)
  {
    return $this->renderTemplate('partial/foo.html.twig', [

    ])
  }
}
    `}
]

class Popular extends Component {
  render () {
    return (
      <div className='popular-container'>
        <h1>Recently used blueprints</h1>
        {blueprints.map((b) => <BlueprintCard blueprint={b} key={b.id} />)}
        {blueprints.map((b) => <BlueprintCard blueprint={b} key={b.id} />)}
        {blueprints.map((b) => <BlueprintCard blueprint={b} key={b.id} />)}
        {blueprints.map((b) => <BlueprintCard blueprint={b} key={b.id} />)}
        {blueprints.map((b) => <BlueprintCard blueprint={b} key={b.id} />)}
        {blueprints.map((b) => <BlueprintCard blueprint={b} key={b.id} />)}
        {blueprints.map((b) => <BlueprintCard blueprint={b} key={b.id} />)}
      </div>
    )
  }
}

export default Popular
