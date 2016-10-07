import React from 'react';
import {Link} from 'react-router';

let Examples = (props) => {
  return (
      <div>
        <h1 className="text-center">Examples</h1>
        <p>Here are a few examles to try out:</p>
        <ol>
          <li>
            <Link to='/?location=Saratov'>Saratov</Link>
          </li>
          <li>
            <Link to='/?location=Rio'>Rio</Link>
          </li>
        </ol>
      </div>
  );
};

module.exports = Examples;
